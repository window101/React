import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Greet from "./Greet";
import App2 from "./App2";

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
      <Greet />
      <App2 />
    </>
  );
}

export default App;
