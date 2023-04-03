import { createSlice } from "@reduxjs/toolkit";

export const chatContent = createSlice({
  name: "message",
  initialState: [
    {
      id: "",
      mess: [],
    },
  ],
  reducers: {
    messContent: (state, actions) => {},
  },
});
export const { messContent } = chatContent.actions;
export default chatContent.reducer;
