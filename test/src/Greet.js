import Member from "./Member";
const Greet = (props) => {
  return (
    <>
      <div>
        안녕하세요{" "}
        <Member name={props.name} age={props.age}>
          반갑습니다
        </Member>
      </div>
    </>
  );
};

export default Greet;
