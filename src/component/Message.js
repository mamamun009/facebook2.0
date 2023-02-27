import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Chatbox from "./Chatbox";
import ChatSidebar from "./ChatSidebar";
import "./Message.css";

const Message = () => {
  const [chatUser, setChatUser] = useState(null);
  return (
    <Grid
      className="messgae_container"
      container
    >
      <Grid
        item
        xs={4}
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowY: "scroll",
        }}
        className="hide-scrollbar"
      >
        <ChatSidebar setChatUser={setChatUser} />
      </Grid>
      <Grid
        className="message_chatbox hide-scrollbar"
        item
        xs={8}
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          maxHeight: "100vh",
          position: "relative",
        }}
      >
        {chatUser ? (
          <Chatbox chatUser={chatUser} />
        ) : (
          <h5 style={{ textAlign: "center", marginTop: "40%" }}>
            Select a user to start a conversation.
          </h5>
        )}
      </Grid>
    </Grid>
  );
};

export default Message;
