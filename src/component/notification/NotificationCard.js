import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Box, Modal } from "@material-ui/core";
import db from "../../firebase";
import PostBody from "./PostBody";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    borderRadius: 0,
    marginTop: 10,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60vw",
    marginLeft: "20vw",
    border: "1px solid #000",
    maxHeight: "80vh",
    marginTop: "10vh",
  },
}));
const NotificationCard = ({ data }) => {
  const classes = useStyles();
  const handleNotification = () => {
    if (!data.data.isRead) {
      db.collection("notification").doc(data.id).update({
        isRead: true,
      });
    }
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        className={classes.root}
        style={{
          backgroundColor: `${data.data.isRead ? "white" : "#ebebeb"}`,
        }}
      >
        <CardContent
          onClick={handleNotification}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Avatar
            src={data.data.photoURL}
            style={{ padding: 5, marginRight: 5 }}
          />
          <p>{data.data.notification}</p>
        </CardContent>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          onBackdropClick={() => setOpen(false)}
        >
          {/* <Fade in={open}> */}
          <Box
            className="hide-scrollbar"
            style={{ overflowY: "scroll", height: "100%", width: "100%" }}
          >
            <PostBody id={data.data.postId} />
          </Box>
          {/* </Fade> */}
        </Dialog>
      </Card>
    </>
  );
};

export default NotificationCard;
