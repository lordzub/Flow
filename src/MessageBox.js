import React, { useState } from "react";
import "./MessageBox.css"; // we will create this file later for our styling

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="messageBox">
      <div className="messageDisplay">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <div className="messageInput">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
