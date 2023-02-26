import React, { useEffect } from "react";
import "./Post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Avatar, IconButton } from "@material-ui/core";
import {
  ChatBubbleOutline,
  NearMeOutlined,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";
import db from "./firebase";
import swal from "sweetalert";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CommentsPage from "./CommentsPage";
const Post = (props) => {
  const [{ user }] = useStateValue();
  const {
    image,
    timestamp,
    message,
    photoURL,
    displayName,
    likersEmail,
    posterEmail,
  } = props.data.data;
  const handlePostMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection("posts")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
        swal("Your post has been deleted!", {
          icon: "success",
        });
      } else {
        // swal("Your post is live!");
      }
      handleClose();
    });
  };
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const giveLike = (id) => {
    db.collection("posts")
      .doc(id)
      .update({
        likersEmail: firebase.firestore.FieldValue.arrayUnion(user.email),
      });
    db.collection("notification").add({
      senderEmail: user.email,
      notification: `${user.displayName} reacted to your post`,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL: user.photoURL,
      userEmail: posterEmail,
      isRead: false,
      postId: id,
    });
    setDislike(false);
  };
  const giveDisLike = (id) => {
    db.collection("posts")
      .doc(id)
      .update({
        disLikersEmail: firebase.firestore.FieldValue.arrayUnion(user.email),
      });
    db.collection("notification").add({
      senderEmail: user.email,
      notification: `${user.displayName} reacted to your post`,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL: user.photoURL,
      userEmail: posterEmail,
      isRead: false,
      postId: id,
    });
    // if (dislike) {
    setLike(false);
    // }
  };
  const handleDisLike = (id) => {
    dislike
      ? db
          .collection("posts")
          .doc(id)
          .update({
            disLikersEmail: firebase.firestore.FieldValue.arrayRemove(
              user.email
            ),
          })
      : giveDisLike(id);
    setDislike(!dislike);
  };
  const handleLike = (id) => {
    like
      ? db
          .collection("posts")
          .doc(id)
          .update({
            likersEmail: firebase.firestore.FieldValue.arrayRemove(user.email),
          })
      : giveLike(id);
    setLike(!like);
  };
  const MySwal = withReactContent(Swal);
  const handleEdit = (data, id) => {
    handleClose();
    MySwal.fire({
      title: "Edit your post:",
      input: "text",
      text: new Date(timestamp?.toDate()).toUTCString(),
      inputValue: data,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        } else {
          db.collection("posts").doc(id).update({
            message: value,
          });
        }
      },
    });
  };
  const handleImg = () => {
    Swal.fire({
      title: displayName,
      text: message,
      imageUrl: image,
      imageWidth: 2000,
      imageHeight: 600,
      imageAlt: "Custom image",
    });
  };
  const [commentPageOpen, setCommentPageOpen] = useState(false);
  const handleAllComments = () => {
    setCommentPageOpen(!commentPageOpen);
  };
  const [comments, setComments] = useState([]);
  const [commentsLength, setCommentsLength] = useState(0);
  useEffect(() => {
    if (comments.length) {
      setCommentsLength(0);
      comments.map((e) =>
        setCommentsLength((prev) => prev + e.data.replies.length)
      );
      setCommentsLength((prev) => prev + comments.length);
      // res.map((e) => console.log(e));
    }
  }, [comments]);
  useEffect(() => {
    db.collection("comments")
      .where("postId", "==", props.data.id)
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, [props.data.id]);
  return (
    <>
      <div className="post">
        <div className="post_top">
          <Avatar src={photoURL} className="post_avatar" />
          <div className="post_topInfo">
            <h3>{displayName}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
          <IconButton style={{ marginLeft: "auto" }} onClick={handlePostMenu}>
            <MoreVertIcon />
          </IconButton>
          <div>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <div
                style={{
                  display: `${posterEmail === user.email ? "block" : "none"}`,
                }}
              >
                <MenuItem onClick={() => handleEdit(message, props.data.id)}>
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>Privacy</MenuItem>
                <MenuItem onClick={() => handleDelete(props.data.id)}>
                  Delete
                </MenuItem>
              </div>
              <MenuItem onClick={handleClose}>Save</MenuItem>
              <MenuItem onClick={handleClose}>Poke</MenuItem>
              <MenuItem onClick={handleClose}>Link</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="post_bottom">
          <p>{message}</p>
        </div>
        <div className="post_image">
          <img src={image} alt="" onClick={() => handleImg()} />
        </div>
        <div className="comments">
          <div
            onClick={() => handleAllComments()}
            style={{ display: `${comments.length > 0 ? "block" : "none"}` }}
            className="comment both"
          >
            <p>
              {commentsLength} Comment
              <span style={{ display: `${comments.length < 2 && "none"}` }}>
                s
              </span>
            </p>
          </div>
        </div>
        <div className="post-options">
          <div
            className="post-option"
            onClick={() => handleLike(props.data.id)}
            style={{
              color: `${
                likersEmail.find((e) => e === user.email) ? "#f50057" : ""
              }`,
            }}
          >
            {likersEmail.length > 0 && (
              <p style={{ fontSize: 18 }}>{likersEmail.length}</p>
            )}
            <ThumbUp style={{ marginLeft: 5 }} />
            <p>Like</p>
          </div>
          <div
            className="post-option"
            onClick={() => handleDisLike(props.data.id)}
            style={{
              color: `${
                props.data?.data?.disLikersEmail &&
                props.data?.data?.disLikersEmail?.find((e) => e === user.email)
                  ? "#f50057"
                  : ""
              }`,
            }}
          >
            {props.data?.data?.disLikersEmail?.length > 0 && (
              <p style={{ fontSize: 18, margiRight: 10 }}>
                {props.data.data.disLikersEmail.length}
              </p>
            )}
            <ThumbDown style={{ marginLeft: 5 }} />
            <p>Dislike</p>
          </div>
          <div onClick={() => handleAllComments()} className="post-option">
            <ChatBubbleOutline />
            <p>Comment</p>
          </div>
          <div className="post-option">
            <NearMeOutlined />
            <p>Share</p>
          </div>
        </div>
        {commentPageOpen && (
          <CommentsPage
            id={props.data.id}
            state={commentPageOpen}
            userEmail={posterEmail}
            comments={comments}
          ></CommentsPage>
        )}
      </div>
    </>
  );
};
export default Post;
