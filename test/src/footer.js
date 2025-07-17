import React, { useEffect } from "react";
import "./footer.css";
import { useLocation } from "react-router-dom";
import homeIcon from "./img/user_home.png";
import reviewIcon from "./img/user_review.png";
import orderIcon from "./img/user_order.png";
import mypageIcon from "./img/user_mypage.png";
import homeIconActive from "./img/user_home_active.png";
import reviewIconActive from "./img/user_review_active.png";
import orderIconActive from "./img/user_order_active.png";
import mypageIconActive from "./img/user_mypage_active.png";
import { Link } from "react-router-dom";

const menuItems = [
  {
    path: "/user/main",
    icon: homeIcon,
    activeIcon: homeIconActive,
    name: "홈",
  },
  {
    path: "/user/reviewList",
    icon: reviewIcon,
    activeIcon: reviewIconActive,
    name: "리뷰",
  },
  {
    path: "/user/orderList",
    icon: orderIcon,
    activeIcon: orderIconActive,
    name: "주문",
  },
  {
    path: "/user/mypage",
    icon: mypageIcon,
    activeIcon: mypageIconActive,
    name: "마이페이지",
  },
];

const UserFooter = () => {
  const location = useLocation();

  return (
    <footer>
      <div className="footerContainer">
        <div className="menuContainer">
          {menuItems.map((item, index) => {
            const isActive =
              location.pathname.replace(/\/$/, "") ===
              item.path.replace(/\/$/, "");
            return (
              <Link
                to={item.path}
                key={index}
                className={`menuLink ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  if (isActive) e.preventDefault();
                }}
              >
                <div className="menuItem">
                  <img
                    src={isActive ? item.activeIcon : item.icon}
                    alt={item.name}
                    className="menuIcon"
                    data-name={item.name}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
export default UserFooter;
