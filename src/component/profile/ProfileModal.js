import React, { useState } from "react";
import { Box, Dialog, TextField } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import "./ProfileModal.css";
import Button from "@material-ui/core/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileModal = ({ open, setOpen }) => {
  const [update, setUpdate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <div>
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
          <h3 className="profile_title">Update Your Profile</h3>
          <form
            onSubmit={handleSubmit}
            className="profile_modal"
            noValidate
            autoComplete="off"
          >
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setUpdate(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic"
              label="Bio"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic"
              label="University"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic"
              label="Degree"
              variant="outlined"
            />
            <Button
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Update Profile
            </Button>
          </form>
        </Box>
      </Dialog>
    </div>
  );
};

export default ProfileModal;
