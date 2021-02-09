import { createSlice } from '@reduxjs/toolkit'

export const patternReducer = createSlice({
  name: "patternReducer",
  initialState: {
    all: [],
    patternId: "", 
    patternDeleted: false
  },
  reducers: {
    setPatterns: (state, action) => {
      state.all = action.payload; // json.results from API
    },
    setPatternId: (state, action) => {
      state.patternId = action.payload
    },
    setPatternDeleted: (state, action) => {
      state.patternDeleted = action.payload
    }
  }
});
///Reducer that have a inital state with nothing in it. 