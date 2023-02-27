import "./App.css";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import db from "./firebase";

function App() {
  const [{ user }] = useStateValue();
  const [state, dispatch] = useStateValue();
  const [notifications, setNotifications] = useState([]);
  const notify = (e) => toast(e);
  const findUser = async () => {
    const res = await localStorage.getItem("user");
    console.log(JSON.parse(res));
    if (res) {
      dispatch({
        type: "FIND_USER",
        user: JSON.parse(res),
      });
    }
  };
  useEffect(() => {
    if (!user) {
      findUser();
    }
  }, []);
  useEffect(() => {
    notifications.forEach((e) => {
      if (e.data?.timestamp?.seconds + 3 > Math.round(Date.now() / 1000)) {
        notify(e.data.notification);
      }
    });
  }, [notifications, notifications.length]);
  const [posts, setPost] = useState([]);
  useEffect(() => {
    if (user && user.email) {
      db.collection("notification")
        .orderBy("timestamp", "desc")
        .where("userEmail", "==", user.email)
        .onSnapshot((snapshot) => {
          setNotifications(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPost(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }
  }, [user]);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          {/* <Header /> */}

          <div className="app_body">
            <Sidebar notifications={notifications} posts={posts} />
            <ToastContainer />
            {/* App Body */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
