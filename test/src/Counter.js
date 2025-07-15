import { useState } from "react";
import React from "react";

const Counter = ({ name, setName }) => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  const updateProps = () => {
    setName("김길동");
  };
  return (
    <>
      <div>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </div>
      <div>{number}</div>
      <button onClick={updateProps}>props변경</button>
    </>
  );
};
export default Counter;
