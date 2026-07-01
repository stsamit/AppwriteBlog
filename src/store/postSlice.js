import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsToStore: (state, action) => {
      state.allPosts = action.payload;
    },
    removePostsFromStore: (state, action) => {
      state.allPosts = [];
    },
  },
});

export const { setPostsToStore, removePostsFromStore } = postSlice.actions;

export default postSlice.reducer;
