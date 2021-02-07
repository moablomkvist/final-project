import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: localStorage.accessToken || null,
    userId: localStorage.userId || 0,
    statusMessage: localStorage.statusMessage || ""
  },
  actions: {
    favoritePatterns: [],
  },
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      console.log(`User Id: ${userId}`);
      state.login.userId = userId
    },
    setName: (state, action) => {
      const { name } = action.payload
      state.login.name = name
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload
      console.log(`Status Message: ${statusMessage}`)
      state.login.statusMessage = statusMessage
    },
    logout: (state, action) => {
      console.log("Logging out");
      state.login.accessToken = null;
      state.login.userId = 0;
      state.login.statusMessage = "";
      localStorage.clear();
    },
    setFavoritePatterns: (store, action) => {
      store.actions.favoriteVideos = action.payload;
    },
  },
})





