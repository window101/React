import { useLocation, useSearchParams } from "react-router-dom";
const Profile2 = () => {
  const [params, setParams] = useSearchParams();
  return (
    <>
      <div>프로필2</div>
      <div>params : {params.get("a")}</div>
      <div>params : {params.get("b")}</div>
      <div>params : {params.get("c")}</div>
    </>
  );
};
export default Profile2;
