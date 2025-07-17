import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Intro from "./intro";
import Profile from "./Profile";
import Profile2 from "./Profile2";
import Layout from "./Layout";
import Greet from "./Greet";

const App5 = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {" "}
        {/* Layout 컴포넌트로 감싸기 */}
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/profile2" element={<Profile2 />} />
      </Route>
      <Route path="greet" element={<Greet />} />
    </Routes>
  );
};
export default App5;
