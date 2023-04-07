import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SS_STORAGE, apiURL } from "../../Component/Constant";
import SetAuthToken from "../../Component/Auth/SetAuthToken";

export const postRegister = createAsyncThunk(
  "register/postRegister",
  async (data) => {
    try {
      const response = await axios.post(`${apiURL}/sign-up`, data);
      if (response.data.success) {
        sessionStorage.setItem(SS_STORAGE, response.data.accessToken);
        if (sessionStorage[SS_STORAGE]) {
          SetAuthToken(sessionStorage[SS_STORAGE]);
        }
      }
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
);

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    loading: false,
    isSuccess: false,
    accessToken: "",
  },
  extraReducers: {
    [postRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [postRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.accessToken = action.payload.accessToken;
    },
    [postRegister.rejected]: (state, action) => {
      state.loading = true;
      state.isSuccess = false;
    },
  },
});
export default registerSlice.reducer;
