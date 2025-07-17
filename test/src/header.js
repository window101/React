import React from "react";
import "./header.css";
import alarmIcon from "./img/user_alarm.png";
import bookmarkIcon from "./img/user_bookmark.png";
import logoutIcon from "./img/user_logout.png";
import logoImage from "./img/user_ohgoodfood_logo.png";

const UserHeader = () => {
  const handleLogout = (e) => {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      e.preventDefault();
    }
  };

  return (
    <header>
      <div className="headerContainer">
        <img src={logoImage} alt="Logo Image" />
        <div className="iconContainer">
          <a href="/user/alarm">
            <img src={alarmIcon} alt="알람" className="icon alarmIcon" />
          </a>
          <a href="/user/bookmark">
            <img src={bookmarkIcon} alt="즐겨찾기" className="icon" />
          </a>
          <a href="/logout" onClick={handleLogout}>
            <img src={logoutIcon} alt="로그아웃" className="icon logoutIcon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
