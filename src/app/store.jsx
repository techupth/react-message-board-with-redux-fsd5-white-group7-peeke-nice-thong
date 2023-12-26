import { configureStore } from "@reduxjs/toolkit";
import messageBoardReducer from "../slices/messageBoardSlice";

const rootReducer = {
  messageBoard: messageBoardReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
