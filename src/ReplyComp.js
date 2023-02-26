import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import "./ReplyComp.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Picker from "emoji-picker-react";
import Popover from "@material-ui/core/Popover";
import axios from "axios";
import firebase from "firebase";
import { ChatBubbleOutline, InsertEmoticon, ThumbUp } from "@material-ui/icons";
const ReplyComp = ({ id, userEmail, replies, posterEmail }) => {
  const [{ user }] = useStateValue();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setComments(doc.data().comments);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  });
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (input !== "" || imgUrl !== "") {
      db.collection("comments")
        .doc(id)
        .update({
          replies: firebase.firestore.FieldValue.arrayUnion({
            comment: input,
            userName: user.displayName,
            photo: user.photoURL,
            posterEmail: user.email,
            commentPhoto: imgUrl,
          }),
        });
      if (posterEmail !== user.email) {
        db.collection("notification").add({
          senderEmail: user.email,
          notification: `${user.displayName} replied to your comment`,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
          userEmail: userEmail,
          isRead: false,
          postId: id,
        });
      }
    }
    setInput("");
    setImgUrl("");
  };
  const [imgLoad, setImgLoad] = useState(false);
  const handleImgUpload = (event) => {
    setImgLoad(true);
    const imgData = new FormData();
    imgData.set("key", "c52ef286d44538b5e35cd23b4743904e");
    imgData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((res) => {
        setImgLoad(false);
        setImgUrl(res.data.data.display_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [openEmoji, setOpenEmoji] = useState(false);

  const onEmojiClick = (emojiObject) => {
    const newInput = input.concat(emojiObject.emoji);
    setInput(newInput);
  };
  const [to, setTo] = useState(3);
  const slicedComments = comments.slice(0, to);
  const handleEditComment = (id, data) => {
    // setInput(data);
  };
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div
        style={{ fontSize: "small", padding: "0px " }}
        className="post-options"
      >
        <div title="Like" className="post-option">
          <ThumbUp />
        </div>
        <div
          title="Reply"
          className="post-option"
          onClick={() => setShowReply((e) => !e)}
        >
          <ChatBubbleOutline />
        </div>
      </div>
      {showReply && (
        <>
          {replies &&
            replies.map((e, index) => (
              <div
                className="post_topInfo comment-area"
                style={{ marginLeft: 10, marginTop: 5 }}
                key={index}
              >
                <div className="comment-area-top">
                  <Avatar src={e.photo} className="post_avatar" />
                  <h3>{e.userName}</h3>
                  <IconButton
                    style={{ marginLeft: "auto" }}
                    // onClick={handleCommentMenu}
                  >
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                </div>
                {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                <div style={{ marginLeft: 50 }}>
                  <p className="comment-text">{e.comment}</p>
                </div>
                <div className="comment-img">
                  <img src={e.commentPhoto} alt="" />
                </div>
              </div>
            ))}
          <div className="post_topInfo comment-area">
            <div className="messageSender_top" style={{ marginLeft: 50 }}>
              <Avatar src={user.photoURL} />
              <form>
                <input
                  placeholder={`Reply to comment...`}
                  className="messageSender_input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                ></input>
                <div className="comment-options">
                  <label htmlFor="upload_comment">
                    <div className="comment-option">
                      <AddAPhotoIcon />
                    </div>
                  </label>
                  <input
                    type="file"
                    onChange={handleImgUpload}
                    id="upload_comment"
                    style={{ display: "none" }}
                  />
                  <div
                    className="comment-option"
                    onClick={() => setOpenEmoji(!openEmoji)}
                  >
                    <InsertEmoticon />
                  </div>
                </div>

                <button onClick={(e) => handleSubmitReply(e)} type="submit">
                  Submit
                </button>
              </form>
              <Popover
                open={openEmoji}
                onClose={() => setOpenEmoji(false)}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                {" "}
                <div>
                  <Picker onEmojiClick={onEmojiClick} />
                </div>
              </Popover>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ReplyComp;
