import { configureStore } from "@reduxjs/toolkit";
import PostModalReducer from "../Slice/PostModalSlice";
import ChatStatusReducer from "../Slice/ChatStatusSlice";
import ChatMessageReducer from "../Slice/ChatMessageSlice";
import PostReducer from "../Slice/PostSlice";
import LoginReducer from "../Slice/LoginSlice";
import RegisterSlice from "../Slice/RegisterSlice";
import { userSlice } from "../Slice/UserSlice";
export const store = configureStore({
  reducer: {
    statusModalPost: PostModalReducer,
    chatStatus: ChatStatusReducer,
    chatMessage: ChatMessageReducer,
    postBlog: PostReducer,
    loginAcc: LoginReducer,
    registerAcc: RegisterSlice,
    allUser: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
