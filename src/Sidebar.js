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
import Covid from "./component/covid/Covid";
import Profile from "./component/profile/Profile";
import Notification from "./component/notification/Notification";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Badge, Button } from "@material-ui/core";
import StoryReel from "./StoryReel";

const Sidebar = ({ notifications, posts }) => {
  const [{ user }] = useStateValue();
  const [screen, setScreen] = useState("Feed");
  const unReadNotifs = notifications.filter((notif) => !notif.data.isRead);
  return (
    <>
      {/* sidebar */}
      <div
        className="hide-scrollbar sidebar-content" 
        style={{
          flex: 0.2,
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowY: "scroll",
          position: "relative",
        }}
      >
        <div style={{ paddingTop: 10, paddingLeft: 10 }}>
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
          <div className="sidebarRow" onClick={() => setScreen("Notification")}>
            {unReadNotifs.length > 0 ? (
              <Badge badgeContent={unReadNotifs.length} color="secondary">
                <NotificationsIcon
                  style={{ fontSize: "xx-large", color: "#f50057" }}
                />
              </Badge>
            ) : (
              <NotificationsIcon
                style={{ fontSize: "xx-large", color: "#f50057" }}
              />
            )}
            <h4>Notification</h4>
          </div>
          <SidebarRow
            Icon={LocalHospitalIcon}
            title="COVID-19"
            setScreen={setScreen}
            screenName="COVID-19"
          />
          {/* <SidebarRow Icon={Storefront} title="Marketplace" />
          <SidebarRow Icon={VideoLibrary} title="Videos" /> */}
        </div>
        <Button
          style={{
            position: "absolute",
            bottom: 2,
            width: "100%",
            borderRadius: 0,
          }}
          variant="contained"
          color="secondary"
          startIcon={<ExitToAppIcon />}
        >
          Sign out
        </Button>
      </div>
      {/* middle page */}
      <div
        className="hide-scrollbar"
        style={{
          flex: 0.6,
          height: "100vh",
          overflowY: "scroll",
          borderRight: "1px solid #d3d3d3",
        }}
      >
        <div>
          {screen === "Feed" ? (
            <Feed posts={posts} />
          ) : screen === "Messenger" ? (
            <Message />
          ) : screen === "Profile" ? (
            <Profile posts={posts} />
          ) : screen === "COVID-19" ? (
            <Covid />
          ) : (
            screen === "Notification" && (
              <Notification notifications={notifications} />
            )
          )}
        </div>
      </div>
      {/* Widgets */}
      <div
        className="hide-scrollbar"
        style={{ flex: 0.2, height: "100vh", overflowY: "scroll" }}
      >
        <div className="story-reel" style={{ padding: 15 }}>
          <StoryReel />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
