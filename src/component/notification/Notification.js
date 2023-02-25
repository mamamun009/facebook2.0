import React from "react";
import "./Notification.css";
import NotificationCard from "./NotificationCard";

const Notification = ({ notifications }) => {
  //
  return (
    <>
      <div
        className="noti_title"
        style={{
          borderBottom: "1px solid rgb(184, 184, 184)",
        }}
      >
        <p style={{fontSize: 24, fontWeight: 600 }}>Notifications</p>
      </div>
      <div style={{ padding: 10 }}>
        {notifications.map((data) => (
          <NotificationCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Notification;
