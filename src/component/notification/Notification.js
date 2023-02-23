import React, { useEffect, useState } from "react";
import "./Notification.css";
import { Container } from "@material-ui/core";
import NotificationCard from "./NotificationCard";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Notification = () => {
  const [{ user }] = useStateValue();
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    db.collection("notification")
      .orderBy("timestamp", "desc")
      .where("userEmail", "==", user.email)
      .onSnapshot((snapshot) =>
        setNotifications(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, [user.email]);
  // 
  return (
    <Container maxWidth="sm" className="notification">
      <h2 style={{ padding: 10 }}>Notifications</h2>
      <div style={{ marginTop: "10px" }}>
        {notifications.map((data) => (
          <NotificationCard data={data} />
        ))}
      </div>
    </Container>
  );
};

export default Notification;
