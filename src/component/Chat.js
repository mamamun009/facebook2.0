import { Avatar } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Chat.css";

const Chat = ({ chatUser, message }) => {
  const [{ user }] = useStateValue();
  return (
    <>
      {message.senderEmail === user.email ? (
        <div className="message owner">
          <div className="">
            <Avatar src={user.photoURL} />
          </div>
          <div className="messageContent">
            <p>{message.message}</p>
            <small>{new Date(message.timestamp?.toDate()).toUTCString()}</small>
          </div>
        </div>
      ) : (
        <div className="message ">
          <div className="">
            <Avatar src={chatUser.photoURL} />
          </div>
          <div className="">
            <p>{message.message}</p>
            <small>{new Date(message.timestamp?.toDate()).toUTCString()}</small>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
