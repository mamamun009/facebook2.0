import React from "react";
import "./Notification.css";
import { Container } from "@material-ui/core";
import NotificationCard from "./NotificationCard";

const Notification = () => {
  return (
    <Container maxWidth="sm" className="notification">
      <h2 style={{ padding: 10 }}>Notifications</h2>
      <div style={{ marginTop: "10px" }}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </Container>
  );
};

export default Notification;
