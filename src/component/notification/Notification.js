import React from "react";
import "./Notification.css";
import NotificationCard from "./NotificationCard";


const Notification = ({ notifications }) => {
  //
  return (
    <div
      style={{
        border: 1,
        borderStyle: "solid",
        borderColor: "rgb(184, 184, 184)",
        borderRadius: 10
      }}
    >
      <div className="noti_title">
        <h2>Notifications</h2>
      </div>
      <div style={{ marginTop: 15 }}>
        {notifications.map((data) => (
          <NotificationCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Notification;
