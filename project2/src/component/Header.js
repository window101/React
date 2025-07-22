import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="Header">
        <h3>오늘은 📅</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
    </>
  );
};
export default React.memo(Header); // 불필요한 리렌더링을 막는 고차 컴포넌트
