const color = {
//공통 컬러
};

// 반응형 모듈
const size = {
    mobile: "",
	laptopS: "",
	laptopXs: "",
	laptop: "",
	desktop: "",
	desktopL: "",
};

export const theme = {
    color,
    mobile: `(max-width: ${size.mobile})`,
	laptopXs: `(max-width: ${size.laptopXs})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopS: `(max-width: ${size.laptopS})`,
	desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`,
};
