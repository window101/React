import { useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Editor from "../component/Editor";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/{id}`);
  };
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
    }
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          title={"일기 수정하기"}
          leftChild={<Button text={"<뒤로 가기"} onClick={goBack} />}
          rightChild={
            <Button
              type={"negative"}
              text={"삭제 하기"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};
export default Edit;
