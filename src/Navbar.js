import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <MenuIcon className="menuIcon" />
        <a href="www.youtube.com" className="logo">
          <img src="youtube.png" alt="logo" />
        </a>
      </div>

      <div className="navbar__search">
        <div className="search__input">
          <input type="text" placeholder="Search" />

          <SearchIcon className="searchIcon"/>
          <MicRoundedIcon className="mic" />
        </div>
      </div>

      <div className="navbar__icons">
        <VideoCallIcon />
        <ViewComfyIcon />
        <NotificationsIcon />
        <Avatar src="https://static.wikia.nocookie.net/dragonball/images/5/5b/Gokusteppingoutofaspaceship.jpg/revision/latest/scale-to-width-down/242?cb=20211011163724" />
      </div>
    </div>
  );
}

export default Navbar;
