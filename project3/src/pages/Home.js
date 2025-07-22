import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div>
        <Header
          title={"Home"}
          leftChild={
            <Button
              type="positive"
              text={"긍정 버튼"}
              onClick={() => alert("positive button")}
            />
          }
          rightChild={
            <Button
              type="negative"
              text={"부정 버튼"}
              onClick={() => alert("negative button")}
            />
          }
        />
        <Editor
          initData={{
            date: new Date().getTime(),
            emotionId: 1,
            content: "이전에 작성했던 일기",
          }}
          onSubmit={() => alert("작성 완료!")}
        />
      </div>
    </>
  );
};
export default Home;
