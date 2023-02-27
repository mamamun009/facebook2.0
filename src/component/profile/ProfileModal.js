import React, { useState } from "react";
import { Box, Dialog, TextField } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import "./ProfileModal.css";
import Button from "@material-ui/core/Button";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileModal = ({ open, setOpen }) => {
  const [{ user }] = useStateValue();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users").doc(user.email).set(
      {
        name: name,
        bio: bio,
        location: location,
        university: university,
        degree: degree,
      },
      { merge: true }
    );
    setName("");
    setBio("");
    setLocation("");
    setUniversity("");
    setDegree("");
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
              id="outlined-basic1"
              value={name}
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic2"
              value={bio}
              label="Bio"
              variant="outlined"
              onChange={(e) => setBio(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic3"
              value={location}
              label="Location"
              variant="outlined"
              onChange={(e) => setLocation(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic4"
              value={university}
              label="University"
              variant="outlined"
              onChange={(e) => setUniversity(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
              id="outlined-basic5"
              value={degree}
              label="Degree"
              variant="outlined"
              onChange={(e) => setDegree(e.target.value)}
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
