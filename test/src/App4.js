import ContextConsumer from "./ContextConsumer";
import ContextConsumer2 from "./ContextConsumer2";
import ContextConsumer3 from "./ContextConsumer3";
import Context1 from "./Context1";
import { useState } from "react";
const App4 = () => {
  const [value, setValue] = useState({ name: "이순신" });
  return (
    <>
      <Context1.Provider value={value}>
        <ContextConsumer />
        <ContextConsumer2 />
        <ContextConsumer3 />
      </Context1.Provider>
      <button onClick={() => setValue({ name: "홍길동" })}>홍길동</button>
      <button onClick={() => setValue({ name: "김유신" })}>김유신</button>
    </>
  );
};
export default App4;
