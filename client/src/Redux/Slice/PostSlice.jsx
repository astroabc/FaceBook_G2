import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SS_STORAGE, apiURL } from "../../Component/Constant/index";
import SetAuthToken from "../../Component/Auth/SetAuthToken";

export const getPost = createAsyncThunk("post/getPost", async () => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.get(`${apiURL}/post`);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});
export const postPost = createAsyncThunk("post/postPost", async (content) => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.post(`${apiURL}/post`, content);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.delete(`${apiURL}/post/${id}`);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});

export const putPost = createAsyncThunk("post/putPost", async (data) => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.put(`${apiURL}/post/${data.id}`, data);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});

export const patchComment = createAsyncThunk(
  "post/patchComment",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.patch(`${apiURL}/post/${data.id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const patchLikes = createAsyncThunk("post/patchLikes", async (data) => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.patch(`${apiURL}/post/like/${data.id}`, data);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
});

export const getAllMyPost = createAsyncThunk(
  "post/getAllMyPost",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.post(`${apiURL}/post/all`, data);
      return response.data.allComment;
    } catch (error) {
      console.log(error);
    }
  },
);

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    allPost: [],
    allMyComment: [],
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
    [putPost.fulfilled]: (state, action) => {
      state.allPost = state.allPost.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    },
    [patchComment.fulfilled]: (state, action) => {
      state.allPost = state.allPost.map((post) => {
        if (post._id === action.payload.id) {
          post.comment.push(action.payload.commentUpdate);
        }
        return post;
      });
    },
    [patchLikes.fulfilled]: (state, action) => {
      state.allPost = state.allPost.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    },
    [getAllMyPost.fulfilled]: (state, action) => {
      state.allMyComment = action.payload;
    },
  },
});
export default PostSlice.reducer;
