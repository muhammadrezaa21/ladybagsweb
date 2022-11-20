import React from "react";
import {useSelector} from 'react-redux'
import "./topbar.css";

const Topbar = () => {
  const dataUser = useSelector(state => state.user)
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Lady Bags Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {dataUser.dataAuthUser.data.name.toUpperCase()}
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;