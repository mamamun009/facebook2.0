import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
const Feed = ({ posts }) => {
  return (
    <>
      <MessageSender />
      <div style={{ padding: 10 }}>
        {posts.map((data) => (
          <Post key={data.id} data={data}></Post>
        ))}
      </div>
    </>
  );
};

export default Feed;
