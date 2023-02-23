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

const NotificationCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ padding: 5, marginRight: 5 }} />
        <p>Mamun React your photo "caption"</p>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
