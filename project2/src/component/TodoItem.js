import "./TodoItem.css";
import React, { useContext } from "react";
import { TodoContext } from "../App";
import { TodoDispatchContext } from "../App";
const TodoItem = ({ id, content, isDone, createDate }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <div className="TodoItem">
        <div className="checkbox_col">
          <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
        </div>
        <div className="title_col">{content}</div>
        <div className="date_col">
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className="btn_col">
          <button onClick={onClickDelete}>삭제</button>
        </div>
      </div>
    </>
  );
};
export default React.memo(TodoItem);
