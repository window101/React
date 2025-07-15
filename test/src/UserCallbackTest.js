import { useState, useCallback } from "react";
import Light from "./Light";

const UserCallbackTest = () => {
  const [light, setLght] = useState(false); // 그냥 자리가 정해진거 [불켜짐여부, 상태바꾸기]
  const toggle = useCallback(() => {
    setLght(!light);
  });
  return (
    <>
      <div>{light ? "on" : "off"}</div>
      <div>
        <button onClick={toggle}>부모에서 토글</button>
      </div>
      <div>
        <Light toggle={toggle} />
      </div>
    </>
  );
};
export default UserCallbackTest;
