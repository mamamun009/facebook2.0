import React, { useEffect, useState } from "react";
import db from "../../firebase";
import Post from "../../Post";

const PostBody = (id) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    // db.collection("notification").doc(id =>)
  }, []);
  return <Post data={post} />;
};

export default PostBody;
