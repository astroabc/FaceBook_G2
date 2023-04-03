import { createSlice } from "@reduxjs/toolkit";

export const chatStatusSlice = createSlice({
  name: "chat-status",
  initialState: [],
  reducers: {
    chatStatus: (state, actions) => {
      state = state.push(actions.payload);
    },
    removeBox: (state, actions) => {
      state = state.splice(actions.payload, 1);
    },
  },
});
export const { chatStatus, removeBox } = chatStatusSlice.actions;
export default chatStatusSlice.reducer;
