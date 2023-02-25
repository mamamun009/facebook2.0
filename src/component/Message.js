import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Chatbox from "./Chatbox";
import ChatSidebar from "./ChatSidebar";
import "./Message.css";

const Message = () => {
  const [chatUser, setChatUser] = useState(null);
  return (
    <div style={{ flex: 1, minHeight: "100vh" }}>
      <Grid
        className="messgae_container"
        container
        style={{ marginTop: "25px" }}
      >
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "white",
            height: "500px",
          }}
        >
          <ChatSidebar setChatUser={setChatUser} />
        </Grid>
        <Grid
          className="message_chatbox"
          item
          xs={8}
          style={{
            backgroundColor: "white",
            height: "500px",
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
    </div>
  );
};

export default Message;
