import { configureStore } from '@reduxjs/toolkit';
import gifData from "../features/SearchModule/reducers";
import postData from "../features/chatbox/reducers";

export const store = configureStore({
  reducer: {
    gifData:gifData,
    postData:postData
  },
});
