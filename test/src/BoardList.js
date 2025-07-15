import React from "react";

const BoardList = ({ board, changeChecked }) => {
  const { no, title, checked } = board;
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={checked ? "checked" : ""}
          onChange={() => changeChecked(no)}
        />
        {no} {title}
      </div>
    </>
  );
};
export default React.memo(BoardList);
