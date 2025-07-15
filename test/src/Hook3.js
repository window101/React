import React, { useState, useMemo } from "react";

const Hooks3 = () => {
  let [list, setList] = useState([]);
  let [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const insert = (e) => {
    console.log(document.querySelector("#number").value);
    setList([...list, parseInt(number)]);
  };

  const sum = (list) => {
    console.log("합계 계산");
    let sum = 0;
    list.forEach((element) => {
      sum += element;
    });
    return sum;
  };

  return (
    <>
      <input type="text" value={number} id="number" onChange={onChange} />
      <button onClick={insert}>등록</button>
      <ul>
        {list.map((v, idx) => (
          <li key={idx}>{v}</li>
        ))}
      </ul>
      <div>합계: {sum(list)}</div>
    </>
  );
};
export default Hooks3;
