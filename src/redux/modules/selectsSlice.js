import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],

  category: [
    "클래식",
    "콘서트",
    "축제-전통/역사",
    "축제-자연/경관",
    "축제-시민화합",
    "축제-문화/예술",
    "축제-기타",
    "전시/미술",
    "영화",
    "연극",
    "뮤지컬/오페라",
    "무용",
    "독주/독창회",
    "국악",
    "교육/체험",
    "기타",
  ],
};
const selectsSlice = createSlice({
  name: "selects",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default selectsSlice.reducer;
