import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import "./Chatbox.css";
import Input from "./Input";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import { Avatar } from "@material-ui/core";

const Chatbox = ({ chatUser }) => {
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => ({ data: doc.data() })))
      );
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <div className="chatbox_header">
        <Avatar src={chatUser.photoURL} />
        <h4 style={{ paddingLeft: 4 }}>{chatUser.displayName}</h4>
      </div>

      <div
        style={{
          overflowY: "scroll",
          height: "80%",
          padding: 10,
          paddingBottom: 50,
        }}
      >
        {messages.map((e) =>
          e.data.senderEmail === chatUser.email &&
          e.data.receiverEmail === user.email ? (
            <Chat chatUser={chatUser} message={e.data} />
          ) : (
            e.data.receiverEmail === chatUser.email &&
            e.data.senderEmail === user.email && (
              <Chat chatUser={chatUser} message={e.data} />
            )
          )
        )}
      </div>
      <Input chatUser={chatUser} />
    </div>
  );
};

export default Chatbox;
