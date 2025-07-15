import { act, useReducer } from "react";
import React from "react";

const Counter = () => {
  function reducer(number, action) {
    if (action.type === "INCREASE") {
      return { value: number.value + 1 };
    } else if (action.type === "DECREASE") {
      return { value: number.value - 1 };
    } else if (action.type === "RESET") {
      return { value: 0 };
    } else {
      return number;
    }
  }
  const [number, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <div>
        {number.value}
        <button onClick={() => dispatch({ type: "INCREASE" })}>증가</button>
        <button onClick={() => dispatch({ type: "DECREASE" })}>감소</button>
        <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      </div>
    </>
  );
};
export default Counter;
