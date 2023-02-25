import React, { useEffect, useState } from "react";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import "./ChatSidebar.css";
import Chatuser from "./Chatuser";

const ChatSidebar = ({ setChatUser }) => {
  const [{ user }] = useStateValue();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ data: doc.data() })))
    );
  }, []);
  return (
    <div className="">
      <div className="noti_title">
        <h2>Messaging</h2>
      </div>
      {users.map(
        (e) =>
          e.data.email !== user.email && (
            <Chatuser key={e.id} user={e.data} setChatUser={setChatUser} />
          )
      )}
    </div>
  );
};

export default ChatSidebar;
