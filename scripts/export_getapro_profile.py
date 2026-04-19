from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup, Tag


PROFILE_URL = "https://getapro.ee/tradesman/catalogue/details/30506"
PORTFOLIO_URL = "https://getapro.ee/tradesman/portfolio/list?tmanId=30506"
OUTPUT_DIR = Path("exports/getapro-corbetti-source")
IMAGES_DIR = OUTPUT_DIR / "images"
RAW_DIR = OUTPUT_DIR / "raw"


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def safe_name(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "item"


def download_file(session: requests.Session, url: str, destination: Path) -> Path:
    destination.parent.mkdir(parents=True, exist_ok=True)
    response = session.get(url, timeout=60)
    response.raise_for_status()
    destination.write_bytes(response.content)
    return destination


def extract_background_image(style: str | None) -> str | None:
    if not style:
        return None
    match = re.search(r"url\(['\"]?(.*?)['\"]?\)", style)
    return match.group(1) if match else None


def get_meta_content(soup: BeautifulSoup, attr_name: str, attr_value: str) -> str | None:
    node = soup.find("meta", attrs={attr_name: attr_value})
    if not node:
        return None
    return node.get("content")


def parse_profile_header(section: Tag) -> dict[str, str]:
    header = section.select_one(".profile-header")
    if not header:
        return {}

    display_name = clean_text(header.select_one(".display-name").get_text(" ", strip=True))
    last_seen = clean_text(header.select_one(".meta").get_text(" ", strip=True))
    registered = clean_text(header.select_one(".tradesman-details__registered").get_text(" ", strip=True))
    languages = clean_text(header.select_one(".tradesman-languages").get_text(" ", strip=True))
    rating = clean_text(header.select_one(".rating-score").get_text(" ", strip=True))
    votes_node = header.select_one(".pt-10 > .small small")
    votes = clean_text(votes_node.get_text(" ", strip=True)) if votes_node else ""

    cover_url = extract_background_image(section.select_one(".cover-photo .photo").get("style"))
    avatar_url = section.select_one(".avatar img").get("src")

    return {
        "display_name": display_name,
        "last_seen": last_seen,
        "registered": registered,
        "languages": languages,
        "rating": rating,
        "votes": votes,
        "cover_url": cover_url or "",
        "avatar_url": avatar_url or "",
    }


def parse_certificates(section: Tag) -> list[str]:
    items: list[str] = []
    for item in section.select(".certificates > div"):
        text = clean_text(item.get_text(" ", strip=True))
        if text:
            items.append(text)
    return items


def parse_about(section: Tag) -> str:
    about = section.select_one("#tab-info .isp-item div")
    return clean_text(about.get_text(" ", strip=True)) if about else ""


def extract_services(list_node: Tag, depth: int = 0) -> list[str]:
    lines: list[str] = []
    for item in list_node.find_all("li", recursive=False):
        category_node = item.find("span", class_="category", recursive=False)
        price_wrapper = item.find("div", class_="pull-right", recursive=False)
        price_node = price_wrapper.find("div", class_="price") if price_wrapper else None

        if category_node:
            title = clean_text(category_node.get_text(" ", strip=True))
        else:
            direct_link = item.find("a", recursive=False)
            title = clean_text(direct_link.get_text(" ", strip=True)) if direct_link else ""

        if title:
            prefix = "  " * depth + "- "
            if price_node:
                price = clean_text(price_node.get_text(" ", strip=True))
                lines.append(f"{prefix}{title} — {price}")
            else:
                lines.append(f"{prefix}{title}")

        child_list = item.find("ul", recursive=False)
        if child_list:
            lines.extend(extract_services(child_list, depth + 1))
    return lines


def parse_service_groups(section: Tag) -> list[dict[str, object]]:
    groups: list[dict[str, object]] = []
    for group in section.select("#tab-info .price-list.row > .group"):
        title_node = group.select_one(".title")
        child_list = group.find("ul")
        if not title_node or not child_list:
            continue
        groups.append(
            {
                "title": clean_text(title_node.get_text(" ", strip=True)),
                "items": extract_services(child_list),
            }
        )
    return groups


def parse_portfolio_groups(portfolio_data: list[dict]) -> list[dict[str, object]]:
    groups: list[dict[str, object]] = []
    for group in portfolio_data:
        items = [item for item in group.get("items", []) if item.get("type") == "image" and item.get("src")]
        if not items:
            continue
        groups.append(
            {
                "object_name": group.get("objectName", "Portfolio"),
                "category_id": group.get("categoryId"),
                "parent_id": group.get("parentId"),
                "items": items,
            }
        )
    return groups


def image_extension(url: str) -> str:
    path = urlparse(url).path
    suffix = Path(path).suffix
    return suffix if suffix else ".jpg"


def write_markdown(
    output_path: Path,
    profile: dict[str, str],
    certificates: Iterable[str],
    about: str,
    service_groups: list[dict[str, object]],
    portfolio_groups: list[dict[str, object]],
    downloaded_images: dict[str, str],
    source_meta: dict[str, str],
) -> None:
    lines: list[str] = []
    lines.append(f"# {profile['display_name']}")
    lines.append("")
    lines.append(f"- Source: {PROFILE_URL}")
    lines.append(f"- Saved on: {source_meta['saved_on']}")
    lines.append(f"- Page title: {source_meta['page_title']}")
    lines.append(f"- Meta description: {source_meta['meta_description']}")
    lines.append("")
    lines.append("## Profile")
    lines.append("")
    lines.append(f"- Name: {profile['display_name']}")
    lines.append(f"- {profile['last_seen']}")
    lines.append(f"- {profile['registered']}")
    lines.append(f"- Languages: {profile['languages']}")
    lines.append(f"- Rating: {profile['rating']}")
    lines.append(f"- Reviews: {profile['votes']}")
    lines.append("")
    lines.append("## Trust Signals")
    lines.append("")
    for item in certificates:
        lines.append(f"- {item}")
    lines.append("")
    lines.append("## About")
    lines.append("")
    lines.append(about)
    lines.append("")

    if profile.get("cover_url") and profile["cover_url"] in downloaded_images:
        lines.append("## Cover Image")
        lines.append("")
        lines.append(f"![Cover image]({downloaded_images[profile['cover_url']]})")
        lines.append("")

    if profile.get("avatar_url") and profile["avatar_url"] in downloaded_images:
        lines.append("## Avatar")
        lines.append("")
        lines.append(f"![Avatar]({downloaded_images[profile['avatar_url']]})")
        lines.append("")

    if source_meta.get("og_image") and source_meta["og_image"] in downloaded_images:
        lines.append("## Open Graph Image")
        lines.append("")
        lines.append(f"![Open Graph image]({downloaded_images[source_meta['og_image']]})")
        lines.append("")

    lines.append("## Services")
    lines.append("")
    for group in service_groups:
        lines.append(f"### {group['title']}")
        lines.append("")
        for item in group["items"]:
            lines.append(item)
        lines.append("")

    lines.append("## Portfolio")
    lines.append("")
    if not portfolio_groups:
        lines.append("No portfolio images were returned by the source API.")
        lines.append("")
    else:
        for group in portfolio_groups:
            lines.append(f"### {group['object_name']}")
            lines.append("")
            for index, item in enumerate(group["items"], start=1):
                src = item["src"]
                local_path = downloaded_images.get(src)
                if local_path:
                    lines.append(f"{index}. [{Path(local_path).name}]({local_path})")
            lines.append("")

    output_path.write_text("\n".join(lines), encoding="utf-8-sig")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    RAW_DIR.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
            )
        }
    )

    profile_response = session.get(PROFILE_URL, timeout=60)
    profile_response.raise_for_status()
    profile_response.encoding = "utf-8"
    profile_html = profile_response.text
    (RAW_DIR / "profile.html").write_text(profile_html, encoding="utf-8")

    portfolio_response = session.get(PORTFOLIO_URL, timeout=60)
    portfolio_response.raise_for_status()
    portfolio_data = portfolio_response.json()
    (RAW_DIR / "portfolio.json").write_text(
        json.dumps(portfolio_data, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    soup = BeautifulSoup(profile_html, "html.parser")
    section = soup.find("section")
    if not section:
        raise RuntimeError("Could not find main section in profile page.")

    profile = parse_profile_header(section)
    certificates = parse_certificates(section)
    about = parse_about(section)
    service_groups = parse_service_groups(section)
    portfolio_groups = parse_portfolio_groups(portfolio_data)

    page_title = clean_text(soup.title.get_text(strip=True)) if soup.title else ""
    meta_description = get_meta_content(soup, "name", "description") or ""
    og_image = get_meta_content(soup, "property", "og:image") or ""

    downloaded_images: dict[str, str] = {}

    primary_images = [
        ("cover", profile.get("cover_url", "")),
        ("avatar", profile.get("avatar_url", "")),
        ("og-image", og_image),
    ]
    for base_name, url in primary_images:
        if not url or url in downloaded_images:
            continue
        destination = IMAGES_DIR / f"{base_name}{image_extension(url)}"
        download_file(session, url, destination)
        downloaded_images[url] = f"images/{destination.name}"

    for group in portfolio_groups:
        group_slug = safe_name(str(group["object_name"]))
        for index, item in enumerate(group["items"], start=1):
            url = item["src"]
            if url in downloaded_images:
                continue
            destination = IMAGES_DIR / f"{group_slug}-{index:02d}{image_extension(url)}"
            download_file(session, url, destination)
            downloaded_images[url] = f"images/{destination.name}"

    source_meta = {
        "saved_on": datetime.now(timezone.utc).isoformat(),
        "page_title": page_title,
        "meta_description": meta_description,
        "og_image": og_image,
    }

    write_markdown(
        output_path=OUTPUT_DIR / "corbetti-getapro.md",
        profile=profile,
        certificates=certificates,
        about=about,
        service_groups=service_groups,
        portfolio_groups=portfolio_groups,
        downloaded_images=downloaded_images,
        source_meta=source_meta,
    )


if __name__ == "__main__":
    main()
