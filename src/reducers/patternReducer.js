import { createSlice } from "@reduxjs/toolkit";

export const patternReducer = createSlice({
  name: "patternReducer",
  initialState: {
    all: [],
    patternId: 0,
  },
  reducers: {
    setPatterns: (state, action) => {
      state.all = action.payload; // json.results from API
    },
    setPatternId: (state, action) => {
      const { patternId } = action.payload;
      console.log(`Pattern Id: ${patternId}`);
      state.login.userId = patternId;
    },
  },
});
