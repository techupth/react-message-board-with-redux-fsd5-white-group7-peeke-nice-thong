import { createSlice } from "@reduxjs/toolkit";

const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({ text: action.payload.text });
    },
    deleteMessage: (state, action) => {
      state.messages.splice(action.payload.index, 1);
    },
  },
});

export const { addMessage, deleteMessage } = messageBoardSlice.actions;
export default messageBoardSlice.reducer;
