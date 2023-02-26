import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import profile from "../../images/profile.jpg";
import hat from "../../images/hat.png";
import "./ProfileUpdate.css";
import ProfileModal from "./ProfileModal";
import { useStateValue } from "../../StateProvider";
import { Button } from "@material-ui/core";

const ProfileUpdate = () => {
  const [open, setOpen] = React.useState(false);
  const [{ user }] = useStateValue();

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="profile_Update">
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
            <h2 style={{ fontSize: "26px" }}>Jugol Karmakar</h2>
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
            {/* <button>
              <CreateIcon style={{ marginRight: "3px", fontSize: "medium" }} />
              Edit Profile
            </button> */}
            <Button
              onClick={() => handleOpen(true)}
              variant="contained"
              color="secondary"
              startIcon={<CreateIcon />}
            >
              Edit Profile
            </Button>
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
