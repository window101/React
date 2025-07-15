import Greet from "./Greet";
import Counter from "./Counter";
import React, { useState } from "react";
import Event3 from "./Event3";
import Event5 from "./Event5";

function App2() {
  let number = [1, 2, 3, 4];
  //let name = "홍길동";
  const [name, setName] = useState("홍길동");
  let age = 10;
  return (
    <>
      <Event5 />
      <Event3 />
      <Counter name={name} setName={setName} />
      {name}
      <ul>
        {number.map((n, i) => (
          <li key={i}>
            <Greet name={name} age={age} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default App2;
