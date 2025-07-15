function Member(props, children) {
  let { name, age } = props;
  return (
    <>
      <div>
        저는 {name} 입니다. 나이는 {age}세 입니다.
      </div>
      <div>{children}</div>
    </>
  );
}
export default Member;
