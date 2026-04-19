const buildImageRange = (prefix: string, count: number) =>
	Array.from({ length: count }, (_, index) => `/images/corbetti/${prefix}-${String(index + 1).padStart(2, '0')}.jpg`);

const houseImages = buildImageRange('getapro-house', 13);
const partitionImages = buildImageRange('getapro-partitions', 46);
const windowImages = buildImageRange('getapro-windows', 35);
const facadeAImages = buildImageRange('getapro-facade-a', 9);
const facadeBImages = buildImageRange('getapro-facade-b', 7);

export const portfolioHouseImages = [
	houseImages[1],
	...houseImages.filter((_, index) => index !== 1 && index !== 10),
];

export const portfolioInteriorImages = [
	partitionImages[1],
	...partitionImages.filter((_, index) => index !== 1),
];

export const portfolioFacadeImages = [
	facadeAImages[1],
	...facadeAImages.filter((_, index) => index !== 1),
	...facadeBImages,
	...windowImages,
];
