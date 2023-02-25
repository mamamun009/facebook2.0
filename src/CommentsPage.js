import { Avatar, IconButton } from "@material-ui/core";
import React, {  useState } from "react";
import db from "./firebase";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import MenuItem from "@material-ui/core/MenuItem";
import { useStateValue } from "./StateProvider";
import "./CommentsPage.css";
import { InsertEmoticon } from "@material-ui/icons";
import { LinearProgress } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Picker from "emoji-picker-react";
import Popover from "@material-ui/core/Popover";
import axios from "axios";
import firebase from "firebase";
import ReplyComp from "./ReplyComp";
const CommentsPage = ({ state, id, userEmail, comments }) => {
  const handleCommentMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "" || imgUrl !== "") {
      db.collection("comments").add({
        comment: input,
        userName: user.displayName,
        photo: user.photoURL,
        posterEmail: user.email,
        commentPhoto: imgUrl,
        replies: [],
        postId: id,
      });
      db.collection("notification").add({
        senderEmail: user.email,
        notification: `${user.displayName} commented on your post`,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
        userEmail: userEmail,
        isRead: false,
        postId: id,
      });
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
    console.log(emojiObject.emoji);
    const newInput = input.concat(emojiObject.emoji);
    setInput(newInput);
  };
  const [to, setTo] = useState(3);
  const slicedComments = comments.slice(0, to);
  const handleEditComment = (id, data) => {
    // setInput(data);
  };
  return (
    <div
      style={{ borderTop: "1px solid rgb(175, 175, 175)", borderRadius: "0" }}
      className="post"
    >
      {slicedComments.map((data) => (
        <>
          <div className="post_top">
            <div>
              {" "}
              <div className="post_topInfo comment-area">
                <div className="comment-area-top">
                <Avatar src={data.data.photo} className="post_avatar" />
                  <h3>{data.data.userName}</h3>
                  <IconButton
                    style={{ marginLeft: "auto" }}
                    onClick={handleCommentMenu}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </div>
                {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                <div>
                  <p className="comment-text">{data.data.comment}</p>
                </div>
                <div className="comment-img">
                  <img src={data.data.commentPhoto} alt="" />
                </div>
                <ReplyComp id={data.id} userEmail={userEmail} replies={data.data.replies} />
              </div>
            </div>
            <div>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {/* <div style={{ display: `${data.posterEmail === user.email ? 'block' : 'block'}` }}> */}
                <MenuItem onClick={() => handleEditComment(id, data.comment)}>
                  Edit
                </MenuItem>
                <MenuItem>Delete</MenuItem>
                {/* </div> */}
              </Menu>
            </div>
          </div>
        </>
      ))}
      {comments.length > 3 && (
        <div
          style={{ display: `${comments.length <= to ? "none" : "block"}` }}
          className="seeMoreBtn"
        >
          <button onClick={() => setTo(to + 3)}>see more</button>
        </div>
      )}
      {comments.length <= to && (
        <div className="seeMoreBtn">
          <button onClick={() => setTo(3)}>see less</button>
        </div>
      )}
      <div
        style={{
          borderTop: "1px solid rgb(175, 175, 175)",
          borderRadius: "10px",
        }}
        className="messageSender_top"
      >
        <Avatar src={user.photoURL} />
        <form>
          <input
            placeholder={`Write a comment...`}
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
            {/* <div
              className="comment-option"
              onClick={() => setOpenEmoji(!openEmoji)}
            >
              <InsertEmoticon />
            </div> */}
          </div>

          <button onClick={(e) => handleSubmit(e)} type="submit">
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
            <Picker onEmojiClick={(emojiObejct) => setInput(prev => prev + emojiObejct.emoji)} />
          </div>
        </Popover>
      </div>
      {imgLoad && <LinearProgress />}
    </div>
  );
};

export default CommentsPage;
