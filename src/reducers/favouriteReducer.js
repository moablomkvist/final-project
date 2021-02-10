import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    items: []
  }
};

export const favouriteReducer = createSlice({
  name: 'favouriteReducer',
  initialState: initialState,
  reducers: {
    addFavourite: (state, action) => {
      const itemInfo = action.payload;
      state.list.items.push(itemInfo);
    },
    deleteFavourite: (state, action) => {
      const { patternId } = action.payload;
      state.list.items = state.list.items.filter(
        (item) => item.id !== patternId
      );
    },
    clearAll: (state, action) => {
      return initialState 
    }
  }
});