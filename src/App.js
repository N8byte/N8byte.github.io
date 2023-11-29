import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Nathan Waskiewicz</h1>
      <p>
        <i className="subtitle">Made in React </i>
        <img src={logo} className="react-logo" alt="React logo" />
      </p>
      <div className="checklist">
        <ChecklistItem checked text="The thing of the to be checked" />
        <ChecklistItem text="Create personal website" />
        <ChecklistItem text="Create AWS/GCP project" />
      </div>
    </>
  );
}

function ChecklistItem(props) {
  return (
    <>
      <input
        type="checkbox"
        checked={props.checked ? true : false}
        readOnly
        onClick={() => {}}
      />
      <label> {props.text}</label>
      <br />
    </>
  );
}

export default App;
