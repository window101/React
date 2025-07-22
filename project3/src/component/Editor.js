import "./Editor.css";
import React, { useState, useEffect } from "react";
import { getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util";
import EmotionItem from "./EmotionItem";
const Editor = ({ initData, onSubmit }) => {
  // useState는 컴포넌트에서 어떤값을 저장하고 필요할 때 꺼내 쓰기 위해
  // 리액트는 state가 바뀌면 자동으로 그 컴포넌트를 리랜더링 함.
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });
  const handleChangeData = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state); // state를 부모에게 전달해서 일기를 저장
  };
  const handleOnGoBack = () => {
    navigate(-1);
  };
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);
  return (
    <>
      <div className="Editor">
        <div className="editor_section">
          <h4>오늘의 날짜</h4>
          <div className="input_wrapper">
            <input type="date" value={state.date} onChange={handleChangeData} />
          </div>
        </div>
        <div className="editor_section">
          <h4>오늘의 감정</h4>
          <div className="input_wrapper emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.id}
                {...it}
                onClick={handleChangeEmotion}
                isSelected={state.emotionId === it.id}
              />
            ))}
          </div>
        </div>
        <div className="editor_section">
          <h4>오늘의 일기</h4>
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
        <div className="editor_section bottom_section">
          <Button text={"취소하기"} onClick={handleOnGoBack} />
          <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
};
export default Editor;
