import { createSlice } from "@reduxjs/toolkit";

export const inputShowPostSlice = createSlice({
  name: "show-modal",
  initialState: {
    status: false,
    statusSetting: false,
  },
  reducers: {
    modalPost: (state, action) => {
      state.status = action.payload.status;
      state.statusSetting = action.payload.statusSetting;
    },
  },
});
export const { modalPost } = inputShowPostSlice.actions;
export default inputShowPostSlice.reducer;
