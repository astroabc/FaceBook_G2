import axios from "axios";
import { SS_STORAGE, apiURL } from "../../Component/Constant/index";
import SetAuthToken from "../../Component/Auth/SetAuthToken";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.post(`${apiURL}/user/my-info`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const postUpdate = createAsyncThunk("user/postUpdate", async (data) => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.post(`${apiURL}/user`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const putAddFriend = createAsyncThunk(
  "user/putAddFriend",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.put(`${apiURL}/user/add-friend`, data);
      return response.data.account;
    } catch (error) {
      console.log(error);
    }
  },
);

export const searchAccount = createAsyncThunk(
  "user/searchAccount",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.post(`${apiURL}/user/search`, data);
      return response.data.account;
    } catch (error) {
      console.log(error);
    }
  },
);
export const searchAccountById = createAsyncThunk(
  "user/searchAccountById",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.post(`${apiURL}/user/search/request`, data);
      return response.data.list;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addFriendToList = createAsyncThunk(
  "user/addFriendToList",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.post(`${apiURL}/user/add-friend`, data);
      return response.data.list;
    } catch (error) {
      console.log(error);
    }
  },
);

export const rejectFriend = createAsyncThunk(
  "user/rejectFriend",
  async (data) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.patch(`${apiURL}/user/search/request`, data);
      return response.data.list;
    } catch (error) {
      console.log(error);
    }
  },
);

export const userSlice = createSlice({
  name: "user-app",
  initialState: {
    all: {},
    listFr: [],
    listReq: [],
    status: false,
    search: [],
  },
  extraReducers: {
    [getUserData.fulfilled]: (state, action) => {
      state.listFr = action.payload.listFr;
      state.listReq = action.payload.listReq;
      state.success = action.payload.success;
      state.all = action.payload.user;
    },
    [postUpdate.fulfilled]: (state, action) => {},
    [putAddFriend.fulfilled]: (state, action) => {},
    [searchAccount.fulfilled]: (state, action) => {
      state.search = [action.payload];
    },
    [searchAccountById.fulfilled]: (state, action) => {},
    [addFriendToList.fulfilled]: (state, action) => {},
    [rejectFriend.fulfilled]: (state, action) => {},
  },
});
export default userSlice.reducer;
