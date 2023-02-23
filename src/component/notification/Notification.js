import React, { useEffect, useState } from "react";
import "./Notification.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationCard from "./NotificationCard";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    border: 1,
    borderStyle: "solid",
    borderColor: "rgb(184, 184, 184)",
  },
}));

const Notification = () => {
  const classes = useStyles();
  const [{ user }] = useStateValue();
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    db.collection("notification")
      .orderBy("timestamp", "desc")
      .where("userEmail", "==", user.email)
      .onSnapshot((snapshot) =>
        setNotifications(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, [user.email]);
  //
  return (
    <Container maxWidth="sm" className={classes.root}>
      <div className="noti_title">
        <h2>Notifications</h2>
      </div>
      <div style={{ marginTop: 15 }}>
        {notifications.map((data) => (
          <NotificationCard data={data} />
        ))}
      </div>
    </Container>
  );
};

export default Notification;
