import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar } from "@material-ui/core";
import db from "../../firebase";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
});

const NotificationCard = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  const handleNotification = () => {
    db.collection("notification").doc(data.id).update({
      isRead: true,
    });
  };
  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: `${data.data.isRead ? "white" : "grey"}` }}
      onClick={handleNotification}
    >
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={data.data.photoURL} style={{ padding: 5, marginRight: 5 }} />
        <p>{data.data.notification}</p>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
