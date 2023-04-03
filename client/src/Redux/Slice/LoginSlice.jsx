import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: "",
    pass: "",
  },
  reducers: {
    setAccount: (state, action) => {
      state.user = action.payload.user;
      state.pass = action.payload.pass;
    },
  },
});
export const { setAccount } = loginSlice.actions;
export default loginSlice.reducer;
