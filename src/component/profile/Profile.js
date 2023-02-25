import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfilePost from "./ProfilePost";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import ProfileUpdate from "./ProfileUpdate";
import db from "../../firebase";
import Post from "../../Post";
import { useStateValue } from "../../StateProvider";

const Profile = () => {
  const [posts, setposts] = useState([]);
  console.log(posts);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="profile">
      <ProfileUpdate />
      <Container maxWidth="sm" className="profile_post">
        <Grid container spacing={3}>
          {posts.map(
            (post) =>
              post.data.posterEmail === user.email && (
                <Grid item xs={12}>
                  <Post key={post.id} data={post}></Post>
                </Grid>
              )
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
