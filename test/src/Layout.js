import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <header>헤더</header>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
