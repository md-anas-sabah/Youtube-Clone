import React from "react";
import "./Sidebar.css";
import SidebarIcon from "./SidebarIcon";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarIcon Icon={HomeIcon} text="Home" />
      <SidebarIcon Icon={ExploreOutlinedIcon} text="Explore" />
      <SidebarIcon Icon={PlayCircleFilledWhiteOutlinedIcon} text="Shorts" />
      <SidebarIcon Icon={SubscriptionsOutlinedIcon} text="Subscriptions" />
      <div className="break"></div>
      <SidebarIcon Icon={VideoLibraryOutlinedIcon} text="Library" />
      <SidebarIcon Icon={HistoryOutlinedIcon} text="History" />
      <SidebarIcon Icon={OndemandVideoOutlinedIcon} text="Your videos" />
      <SidebarIcon Icon={WatchLaterOutlinedIcon} text="Watch later" />
      <SidebarIcon Icon={ThumbUpOutlinedIcon} text="Liked videos" />
      <SidebarIcon Icon={ExpandMoreOutlinedIcon} text="Show more" />
      <div className="break"></div>
      <h2>Subscriptions</h2>
      <div className="subscription">
        <Avatar sx={{ width: 25, height: 25 }}>CP</Avatar>
        <h3>Clever Programmer</h3>
      </div>
    </div>
  );
}

export default Sidebar;
