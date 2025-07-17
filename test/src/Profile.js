import { useParams } from "react-router-dom";
const Profile = () => {
  const params = useParams();
  return (
    <>
      <div>프로필</div>
      <div>params : {params.name}</div>
    </>
  );
};
export default Profile;
