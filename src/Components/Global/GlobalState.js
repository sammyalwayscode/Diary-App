import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  diaries: [],
  favorite: [],
};

const GlobalState = createSlice({
  name: "authState",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.currentUser = payload;
    },

    addMomery: (state, { payload }) => {
      state.diaries = payload;
    },

    signOut: (state) => {
      state.currentUser = null;
    },

    addFavorite: (state, { payload }) => {
      const checkData = state.favorite.findIndex(
        (el) => el._id === payload._id
      );

      if (checkData >= 0) {
        state.favorite[checkData].NUM += 1;
      } else {
        state.favorite.push({ ...payload, NUM: 1 });
      }
    },

    removeFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter((el) => el._id !== payload._id);
    },
  },
});

export const { createUser, signOut, addMomery, addFavorite, removeFavorite } =
  GlobalState.actions;

export default GlobalState.reducer;
