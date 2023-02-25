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
  const [notifications, setNotifications] = useState([]);
  const notify = (e) => toast(e);
  useEffect(() => {
    notifications.forEach((e) => {
      if (e.data?.timestamp?.seconds + 3 > Math.round(Date.now() / 1000)) {
        notify(e.data.notification);
      }
      // e.data.timestamp.seconds + 3 > Math.round(Date.now() / 1000) &&
    });
  }, [notifications, notifications.length]);
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
            <Sidebar />
            <ToastContainer />
            {/* App Body */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
