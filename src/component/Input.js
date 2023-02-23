import React from "react";
import "./Input.css";
const Input = ({ chatUser }) => {
  const formData = {};
  return (
    <div>
      <form>
        <div
          className="message_send"
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
          }}
        >
          <input
            className="message_input"
            type="text"
            placeholder="Write a massage..."
          />
          <button className="message_button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
