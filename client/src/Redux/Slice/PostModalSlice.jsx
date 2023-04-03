import { createSlice } from "@reduxjs/toolkit";

export const inputShowPostSlice = createSlice({
  name: "show-modal",
  initialState: {
    status: false,
  },
  reducers: {
    modalPost: (state, action) => {
      state.status = action.payload.status;
    },
  },
});
export const { modalPost } = inputShowPostSlice.actions;
export default inputShowPostSlice.reducer;
