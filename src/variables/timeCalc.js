const YEAR = 31104000;
const MONTH = 2592000;
const DAY = 86400;
const HOUR = 3600;
const MIN = 60;

export const timeCalc = (writtenTime) => {
    const now = Math.floor(Date.now() / 1000);
    const target = now - writtenTime;
    let result = '';
    if (Math.floor(target / YEAR) > 0) {
        result = `${Math.floor(target / YEAR)}년 전`;
    } else if (Math.floor(target / MONTH) > 0) {
        result = `${Math.floor(target / MONTH)}달 전`;
    } else if (Math.floor(target / DAY) > 0) {
        result = `${Math.floor(target / DAY)}일 전`;
    } else if (Math.floor(target / HOUR) > 0) {
        result = `${Math.floor(target / HOUR)}시간 전`;
    } else if (Math.floor(target / MIN) > 0) {
        result = `${Math.floor(target / MIN)}분 전`;
    } else {
        result = `수 초 내`;
    }

    return result;
}