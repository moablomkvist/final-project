import { createSlice } from '@reduxjs/toolkit'

export const patternReducer = createSlice({
  name: "patternReducer",
  initialState: {
    all: [],
    post: {}
  },
  reducers: {
    setPatterns: (state, action) => {
      state.all = action.payload; // json.results from API
    }
  }
});
///Reducer that have a inital state with nothing in it. 