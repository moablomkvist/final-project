import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "",
    items: []
  }
};

export const favouriteReducer = createSlice({
  name: 'favouriteReducer',
  initialState: initialState,
  reducers: {
    addFavourite: (state, action) => {
      console.log(action)
      const itemInfo = action.payload;
      state.list.items.push(itemInfo);
    },
    deleteFavourite: (state, action) => {
      const { patternId } = action.payload;
      console.log(action)
      state.list.items = state.list.items.filter(
        (item) => item.id !== patternId
      );
    },
    clearAll: (state, action) => {
      return initialState // Does not need a state or action(payload)
    }
  }
});