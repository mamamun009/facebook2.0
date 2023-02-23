import React from "react";
import "./Profile.css";
import profile from "../../images/profile.jpg";
import hat from "../../images/hat.png";
import { useStateValue } from "../../StateProvider";
import CreateIcon from "@material-ui/icons/Create";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ProfilePost from "./ProfilePost";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [{ user }] = useStateValue();
  return (
    <div className="profile">
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
              src={profile}
              alt=""
            />
          </div>
          <div className="profile_bio">
            <h2 style={{ fontSize: "26px" }}>{user.displayName}</h2>
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
            <button>
              <CreateIcon style={{ marginRight: "3px", fontSize: "medium" }} />
              Edit Profile
            </button>
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
      <Container maxWidth="md" className="profile_post">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ProfilePost />
          </Grid>
          <Grid item xs={6}>
            <ProfilePost />
          </Grid>
          <Grid item xs={6}>
            <ProfilePost />
          </Grid>
          <Grid item xs={6}>
            <ProfilePost />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
