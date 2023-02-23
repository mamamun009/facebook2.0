import React, { useEffect, useState } from "react";
import db from "../../firebase";
import Post from "../../Post";

const PostBody = (id) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    let docRef = db.collection("posts").doc(id.id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPost({ id: id.id, data: doc.data() });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
  return (
    <>
      {post && (
        <Post data={post} />
      )}
    </>
  );
};

export default PostBody;
