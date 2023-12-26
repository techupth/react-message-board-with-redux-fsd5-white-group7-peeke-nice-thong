import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, deleteMessage } from "../slices/messageBoardSlice";

const MessageBoard = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageBoard.messages);
  const [messageText, setMessageText] = useState("");

  const handleSubmit = () => {
    if (messageText.trim() !== "") {
      dispatch(addMessage({ text: messageText }));
      setMessageText("");
    } else {
      alert("Enter Message Here");
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteMessage({ index }));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <h1>{message.text}</h1>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
