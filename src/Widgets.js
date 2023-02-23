import React from "react";
import StoryReel from "./StoryReel";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="widget" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
      <StoryReel />
    </div>
  );
};

export default Widgets;
