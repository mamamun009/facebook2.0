import React, { useState } from "react";
import "./Input.css";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
const Input = ({ chatUser }) => {
  const [{ user }] = useStateValue();
  const [message, setMessage] = useState(null);
  const handleSumbit = async () => {
    // e.preventDefault();
    if (message) {
      await db.collection("messages").add({
        senderEmail: user.email,
        receiverEmail: chatUser.email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("");
    }
  };
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSumbit();
        }}
      >
        <div
          className="message_send"
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            marginTop: 60,
          }}
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message_input"
            type="text"
            placeholder="Write a massage..."
          />
          <button type="submit" className="message_button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
