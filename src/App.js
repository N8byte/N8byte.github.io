import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Nate's Website</h1>
      <p style={{ opacity: 0.5 }}>
        <i>Made in React</i>
        <img src={logo} className="react-logo" alt="React logo" />
      </p>
      <ChecklistItem checked={true} text="The thing of the to be checked" />
      <ChecklistItem checked={false} text="Create personal website" />
      <ChecklistItem checked={false} text="Create Rust project" />
    </>
  );
}

function ChecklistItem(props) {
  return (
    <>
      <input
        type="checkbox"
        checked={props.checked}
        readOnly
        onClick={() => {}}
      />
      <label>{props.text}</label>
      <br />
    </>
  );
}

export default App;
