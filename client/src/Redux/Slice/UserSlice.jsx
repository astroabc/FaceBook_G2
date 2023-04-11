import axios from "axios";
import { SS_STORAGE, apiURL } from "../../Component/Constant/index";
import SetAuthToken from "../../Component/Auth/SetAuthToken";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUser = createAsyncThunk("user/getUser", async () => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.get(`${apiURL}/user`);
    return response.data.user;
  } catch (error) {
    console.log(error);
  }
});

export const postUpdate = createAsyncThunk("user/postUpdate", async (data) => {
  SetAuthToken(sessionStorage[SS_STORAGE]);
  try {
    const response = await axios.post(`${apiURL}/user`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user-app",
  initialState: {
    allUser: [],
    status: false,
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.allUser = action.payload;
    },
    [postUpdate.fulfilled]: (state, action) => {
      state.allUser.status = action.payload.success;
    },
  },
});
export default userSlice.reducer;
