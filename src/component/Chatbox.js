import React, { useRef, useState } from "react";
import { useStateValue } from "../StateProvider";
import Chat from "./Chat";
import "./Chatbox.css";
import Input from "./Input";
import Box from "@material-ui/core/Box";

const Chatbox = ({ chatUser: user }) => {
  return (
    <div>
      <div className="chatbox_header">
        <h4>{user.displayName}</h4>
        <p>Student</p>
      </div>

      <Box style={{ overflowY: "scroll", maxHeight: "100vh" }}>
        <Chat />
      </Box>
      <Input chatUser={user} />
    </div>
  );
};

export default Chatbox;
