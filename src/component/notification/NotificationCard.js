import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Backdrop, Fade, Modal } from "@material-ui/core";
import db from "../../firebase";
import PostBody from "./PostBody";

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
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
    handleOpen();
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        className={classes.root}
        style={{
          backgroundColor: `${data.data.isRead ? "white" : "#ebebeb"}`,
        }}
        onClick={handleNotification}
      >
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={data.data.photoURL}
            style={{ padding: 5, marginRight: 5 }}
          />
          <p>{data.data.notification}</p>
        </CardContent>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <PostBody id={data.data.postId} />
          </Fade>
        </Modal>
      </Card>
    </>
  );
};

export default NotificationCard;
