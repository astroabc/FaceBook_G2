import { configureStore } from "@reduxjs/toolkit";
import userFakeSlice from "../Slice/UserFakeSlice";
import PostModalReducer from "../Slice/PostModalSlice";
import ChatStatusReducer from "../Slice/ChatStatusSlice";
import ChatMessageReducer from "../Slice/ChatMessageSlice";
import PostReducer from "../Slice/PostSlice";
import LoginReducer from "../Slice/LoginSlice";
import RegisterSlice from "../Slice/RegisterSlice";
export const store = configureStore({
  reducer: {
    user: userFakeSlice,
    statusModalPost: PostModalReducer,
    chatStatus: ChatStatusReducer,
    chatMessage: ChatMessageReducer,
    postBlog: PostReducer,
    loginAcc: LoginReducer,
    registerAcc: RegisterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
