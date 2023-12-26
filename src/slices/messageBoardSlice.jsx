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
      const { index } = action.payload;
      state.messages.splice(index, 1);
    },
  },
});

const { addMessage, deleteMessage } = messageBoardSlice.actions;

export { addMessage, deleteMessage };
export default messageBoardSlice.reducer;
