import { createSlice } from "@reduxjs/toolkit";

export const PostMain = createSlice({
  name: "post-main",
  initialState: [],
  reducers: {
    postMain: (state, action) => {
      state = state.push(action.payload);
    },
    postComment: (state, action) => {},
    removePost: (state, action) => {
      state = state.splice(action.payload, 1);
    },
  },
});
export const { postMain, postComment, removePost } = PostMain.actions;
export default PostMain.reducer;
