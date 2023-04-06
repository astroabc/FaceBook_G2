import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiURL } from "../../Component/Constant/index";

export const getPost = createAsyncThunk("post/getPost", async () => {
  try {
    const response = await axios.get(`${apiURL}/post`);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});
export const postPost = createAsyncThunk("post/postPost", async (content) => {
  try {
    const response = await axios.post(`${apiURL}/post`, content);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  try {
    const response = await axios.delete(`${apiURL}/post/${id}`);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    allPost: [],
  },
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.allPost = action.payload;
    },
    [postPost.fulfilled]: (state, action) => {
      state.allPost.push(action.payload);
    },
    [deletePost.fulfilled]: (state, action) => {
      state.allPost = state.allPost.filter(
        (post) => post._id !== action.payload,
      );
    },
  },
});
export default PostSlice.reducer;
