import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ApiState {
  value: Array<object>;
}

const initialState: ApiState = {
  value: [{}],
};

export const newsapiSlice = createSlice({
  name: "newsapi",
  initialState,
  reducers: {
    call: (state) => {
      fetch(
        "https://newsdata.io/api/1/news?apikey=pub_479bc1cc6ef7ef6c0fbd8d53bc45f0eaf42&q&category=sports,health.json"
      )
        .then((res) => res.json())
        .then((data) => (state.value = data));
    },
  },
});

export const { call } = newsapiSlice.actions;
export default newsapiSlice.reducer;
