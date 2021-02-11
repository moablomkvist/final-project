import { createSlice } from "@reduxjs/toolkit";

export const favouriteReducer = createSlice({
  name: 'favouriteReducer',
  initialState: {
    items: []
  },
  reducers: {
    addFavourite: (state, action) => {
      state.items.push(action.payload)
    },
    // deleteFavourite: (state, action) => {
    //   const { patternId } = action.payload;
    //   state.list.items = state.list.items.filter(
    //     (item) => item.id !== patternId
    //   );
    // },
    // clearAll: (state, action) => {
    //   return initialState 
    // }
  }
});