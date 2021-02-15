import { createSlice } from "@reduxjs/toolkit";

export const favouriteReducer = createSlice({
  name: 'favouriteReducer',
  initialState: {
    items: []
  },
  reducers: {
    addFavourite: (state, action) => {
        state.items.push({...action.payload, quantity: 1 })
      },
      
    deleteFavourite: (state, action) => {
      const existingFavourite = state.items.find((item) => item._id === action.payload._id)
      
      if (existingFavourite && existingFavourite.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== action.payload._id)
      } else if (existingFavourite) {
        existingFavourite.quantity -= 1
      }
    },
  }
});

