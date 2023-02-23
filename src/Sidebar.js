import { PeopleOutline, Storefront, VideoLibrary } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React, { useState } from "react";
import Message from "./component/Message";
import Feed from "./Feed";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";
import Covid from "./component/covid/Covid";
import Profile from "./component/profile/Profile";
import Notification from "./component/notification/Notification";
import { Badge } from "@material-ui/core";

const Sidebar = () => {
  const [{ user }] = useStateValue();
  const [screen, setScreen] = useState("Feed");
  console.log(screen);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <SidebarRow
            src={user.photoURL}
            title={user.displayName}
            setScreen={setScreen}
            screenName="Profile"
          ></SidebarRow>
          <SidebarRow
            Icon={HomeIcon}
            title="Feed"
            setScreen={setScreen}
            screenName="Feed"
          />
          <SidebarRow
            Icon={MessageIcon}
            title="Messenger"
            setScreen={setScreen}
            screenName="Messenger"
          />
          <SidebarRow
            Icon={LocalHospitalIcon}
            title="COVID-19"
            setScreen={setScreen}
            screenName="COVID-19"
          />
          <SidebarRow
            Icon={NotificationsIcon}
            title="Notification"
            setScreen={setScreen}
            screenName="Notification"
          />
          <SidebarRow Icon={Storefront} title="Marketplace" />
          <SidebarRow Icon={VideoLibrary} title="Videos" />
        </div>
      </div>
      {screen === "Feed" ? (
        <Feed />
      ) : screen === "Messenger" ? (
        <Message />
      ) : screen === "Profile" ? (
        <Profile />
      ) : screen === "COVID-19" ? (
        <Covid />
      ) : (
        screen === "Notification" && <Notification />
      )}

      {/* Widgets */}
      <Widgets />
    </>
  );
};

export default Sidebar;
