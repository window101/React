import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const move = () => {
    navigate("/greet");
  };
  return (
    <>
      <div>
        <h1>Main</h1>
        <a href="/intro">소개</a>
        <Link to="/intro">소개</Link>
        <br />
        <h2>라우터 변수</h2>
        <Link to="/profile/홍길동">홍길동</Link>
        <Link to="/profile/이순신">이순신</Link>
        <h2>파라미터 방식</h2>
        <Link to="/profile2?a=1&b=2&c=3">프로필2</Link>
        <br />
        <button onClick={move}>페이지 이동</button>
      </div>
    </>
  );
};
export default Main;
