import Context1 from "./Context1";
import { useContext } from "react";

const ContextConsumer3 = () => {
  const { name } = useContext(Context1);
  return (
    <>
      <div>{name}</div>
    </>
  );
};
export default ContextConsumer3;
