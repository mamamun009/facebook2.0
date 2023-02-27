import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";
const SidebarRow = ({ src, Icon, title, setScreen, screenName, screen }) => {
  return (
    <div
      className={`sidebarRow ${screen === screenName && "activebtn"}`}
      // style={{ backgroundColor: `${screen === title ? "lightgray" : ""}` }}
      onClick={() => setScreen(screenName)}
    >
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
