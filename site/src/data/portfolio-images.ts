const buildImageRange = (prefix: string, count: number) =>
	Array.from({ length: count }, (_, index) => `/images/corbetti/${prefix}-${String(index + 1).padStart(2, '0')}.jpg`);

const houseImages = buildImageRange('getapro-house', 13);
const partitionImages = buildImageRange('getapro-partitions', 46);
const windowInstallImages = buildImageRange('getapro-window-install', 45);
const facadeAImages = buildImageRange('getapro-facade-a', 9);
const facadeBImages = buildImageRange('getapro-facade-b', 7);
const facadeExtraImages = buildImageRange('getapro-facade-extra', 7);
const scaffoldImages = buildImageRange('getapro-scaffold', 6);
const demolitionImages = buildImageRange('getapro-demolition', 18);
const heatBoxImages = buildImageRange('getapro-heat-box', 5);
const premisesRepairImages = buildImageRange('getapro-premises-repair', 24);
const floorRepairImages = buildImageRange('getapro-floor-repair', 15);
const regipsImages = buildImageRange('getapro-regips', 39);
const toljanImages = buildImageRange('toljan', 34);
const concreteImages = buildImageRange('getapro-concrete', 40);

export const portfolioHouseImages = [
	...houseImages.filter((_, index) => index !== 7 && index !== 10),
];

export const portfolioInteriorImages = [
	...partitionImages.filter((_, index) => ![3, 4, 11, 14, 19, 30].includes(index)),
];

export const portfolioFacadeImages = [
	...facadeAImages,
	...facadeBImages,
	...facadeExtraImages,
];

export const portfolioToljanImages = toljanImages;

export const portfolioConcreteImages = concreteImages;

export const portfolioWindowInstallImages = windowInstallImages;

export const portfolioScaffoldImages = scaffoldImages;

export const portfolioDemolitionImages = demolitionImages;

export const portfolioHeatBoxImages = heatBoxImages;

export const portfolioPremisesRepairImages = premisesRepairImages;

export const portfolioFloorRepairImages = floorRepairImages;

export const portfolioRegipsImages = regipsImages;
