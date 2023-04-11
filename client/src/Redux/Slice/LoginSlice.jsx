import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import SetAuthToken from "../../Component/Auth/SetAuthToken";
import { apiURL, SS_STORAGE } from "../../Component/Constant/index";

export const postLogin = createAsyncThunk(
  "login/postLogin",
  async (data, thunkAPI) => {
    SetAuthToken(sessionStorage[SS_STORAGE]);
    try {
      const response = await axios.post(`${apiURL}/sign-in`, data);
      if (response.data.success) {
        sessionStorage.setItem(SS_STORAGE, response.data.accessToken);
        if (sessionStorage[SS_STORAGE]) {
          SetAuthToken(sessionStorage[SS_STORAGE]);
        }
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    isSuccess: false,
    userID: "",
    accessToken: "",
    user: null,
    email: "",
  },
  reducers: {},
  extraReducers: {
    [postLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [postLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.accessToken = action.payload.accessToken;
      state.userID = action.payload.userID;
      state.user = action.payload.user;
      state.email = action.payload.email;
    },
    [postLogin.rejected]: (state, action) => {
      state.isFail = true;
    },
  },
});
export default loginSlice.reducer;
