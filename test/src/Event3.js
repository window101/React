function Event3() {
  const onClick = (e) => {
    const { isTrusted, target, bubbles } = e;
    console.log("클릭 이벤트 : ", isTrusted, target, bubbles);
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <>
      <div onClick={onClick}>클릭3</div>
    </>
  );
}
export default Event3;
