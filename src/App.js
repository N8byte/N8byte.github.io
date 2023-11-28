// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Nate's Website</h1>
      <p style={{ opacity: 0.5 }}>Made in React⚛️</p>
      <input type="checkbox" checked readOnly></input>
      <label>The thing of the to be checked</label>
      <br />
      <input type="checkbox" readOnly></input>
      <label>Create personal website</label>
      <br />
      <input type="checkbox" readOnly></input>
      <label>Create Rust project</label>
    </>
  );
}

export default App;
