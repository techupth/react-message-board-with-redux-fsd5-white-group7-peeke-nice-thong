import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, deleteMessage } from "../slices/messageBoardSlice";

const MessageInput = ({ value, onChange, onSubmit }) => {
  return (
    <div className="message-input-container">
      <label>
        <input
          id="message-text"
          name="message-text"
          type="text"
          placeholder="Enter message here"
          value={value}
          onChange={onChange}
        />
      </label>
      <button className="submit-message-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

const Message = ({ text, onDelete }) => {
  return (
    <div className="message">
      <h1>{text}</h1>
      <button className="delete-button" onClick={onDelete}>
        x
      </button>
    </div>
  );
};

const MessageBoard = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageBoard.messages);
  const [messageText, setMessageText] = useState("");

  const handleSubmit = () => {
    if (messageText.trim() !== "") {
      dispatch(addMessage({ text: messageText }));
      setMessageText("");
    } else {
      alert("Please Enter Message Here ! ");
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteMessage({ index }));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <MessageInput
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onSubmit={handleSubmit}
      />
      <div className="board">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
