import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
});

const NotificationCard = ({data}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={data.photoURL} style={{ padding: 5, marginRight: 5 }} />
        <p>{data.notification}</p>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
