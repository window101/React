import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>
        <Header
          title={"새 일기 쓰기"}
          leftChild={<Button text={"<뒤로 가기"} onClick={goBack} />}
        />
        <Editor onSubmit={onSubmit} />
      </div>
    </>
  );
};
export default New;
