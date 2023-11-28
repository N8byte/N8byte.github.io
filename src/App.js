import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Nate's Website</h1>
      <p>
        <i className="subtitle">Made in React </i>
        <img src={logo} className="react-logo" alt="React logo" />
      </p>
      <div className="checklist">
        <ChecklistItem checked={true} text="The thing of the to be checked" />
        <ChecklistItem checked={false} text="Create personal website" />
        <ChecklistItem checked={false} text="Create Rust project" />
      </div>
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
