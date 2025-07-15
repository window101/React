const Light = ({ toggle }) => {
  console.log("렌더링 되나");
  return (
    <>
      <button onClick={toggle}>토글</button>
    </>
  );
};
export default Light;
