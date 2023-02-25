import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
const Feed = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed" style={{ minHeight: "100vh" }}>
      {/* StoryReel */}
      {/* <StoryReel /> */}
      {/* MessageSender */}
      <div style={{ margin: 10 }}>
        <MessageSender />
        {post.map((data) => (
          <Post key={post.id} data={data}></Post>
        ))}
      </div>
    </div>
  );
};

export default Feed;
