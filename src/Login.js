import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import db, { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";
import logos from "../src/images/logos.png";
const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        db.collection("users").doc(res.user.email).set(
          {
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL,
          },
          { merge: true }
        );
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src={logos} alt="logo" />
        <h1 style={{ textAlign: "center", fontSize: "36px" }}>Mocospace</h1>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={signIn}
      >
        LogIn
      </Button>
    </div>
  );
};

export default Login;
