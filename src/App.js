import reactLogo from "./assets/images/react.svg";
import logo from "./assets/images/logo.svg";
import gcp from "./assets/images/gcp.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h1>Nathan Waskiewicz</h1>
      <p>
        <i className="subtitle">Made in React </i>
        <img src={reactLogo} className="react-logo" alt="React logo" />
      </p>
      <div className="checklist">
        <ChecklistItem checked text="The thing of the to be checked" />
        <ChecklistItem text="Create personal website" />
        <ChecklistItem text="Create AWS/GCP project" />
      </div>
      <Catalog />
    </>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src={logo}
        onClick={() => console.log("heya")}
        alt="My logo"
      />
    </div>
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

function Catalog(props) {
  return (
    <div className="catalog">
      <img src={gcp} alt="GCP logo"></img>
      <img src={gcp} alt="GCP logo"></img>
      <img src={gcp} alt="GCP logo"></img>
      <img src={gcp} alt="GCP logo"></img>
    </div>
  );
}

export default App;
