import React from "react";
import "./Profile.css";
import Grid from "@material-ui/core/Grid";
import ProfileUpdate from "./ProfileUpdate";
import Post from "../../Post";
import { useStateValue } from "../../StateProvider";

const Profile = ({ posts }) => {
  const [{ user }] = useStateValue();

  return (
    <>
      {" "}
      <div
        className="noti_title"
        style={{
          borderBottom: "1px solid rgb(184, 184, 184)",
        }}
      >
        <p style={{ fontSize: 24, fontWeight: 600 }}>
          {user.displayName}'s profile
        </p>
      </div>
      <div style={{ padding: 20 }}>
        <ProfileUpdate />
        <Grid container spacing={1}>
          {posts.map(
            (post) =>
              post.data.posterEmail === user.email && (
                <Grid item xs={12} key={post.id}>
                  <Post data={post}></Post>
                </Grid>
              )
          )}
        </Grid>
      </div>
    </>
  );
};

export default Profile;
