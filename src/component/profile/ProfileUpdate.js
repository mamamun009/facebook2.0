import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import profile from "../../images/profile.jpg";
import hat from "../../images/hat.png";
import "./ProfileUpdate.css";
import { makeStyles } from "@material-ui/core/styles";
import ProfileModal from "./ProfileModal";
import { useStateValue } from "../../StateProvider";

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

const ProfileUpdate = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [{ user }] = useStateValue();

  const handleOpen = () => {
    setOpen(true);
  };
  

  return (
    <div>
      <div className="profile_info">
        <div>
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "100%",
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className="profile_bio">
            {/* <h2 style={{ fontSize: "26px" }}>Jugol Karmakar</h2> */}
            <p
              style={{
                paddingTop: "3px",
                paddingBottom: "3px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Student
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "3px",
              }}
            >
              <LocationOnIcon />
              Barishal,Bangladesh
            </p>
          </div>
        </div>
        <div className="profile_button">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button onClick={() => handleOpen(true)}>
              <CreateIcon style={{ marginRight: "3px", fontSize: "medium" }} />
              Edit Profile
            </button>
            <ProfileModal open={open} setOpen={setOpen} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "start",
              textAlign: "right",
            }}
          >
            <img src={hat} alt="" style={{ marginTop: "8px" }} />
            <div className="profile_bio">
              <p>
                Studies <span>B.Sc. in Computer Science & Engineering</span> at
              </p>
              <h4>University of Global village,Barishal</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
