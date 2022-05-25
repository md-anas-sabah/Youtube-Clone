import React from "react";
import "./SidebarIcon.css";

function SidebarIcon({ text, Icon }) {
  return (
    <div className="sidebar__icon">
      <Icon />
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarIcon;
