import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";

function App() {
  const name = "React";
  const style = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <h1 style={style}> Hello {name}</h1>
      <h2 style={{ backgroundColor: "yellow", color: "red" }}> 안녕하세요</h2>
      <Test />
    </>
  );
}

export default App;
