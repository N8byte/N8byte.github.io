import reactLogo from "./assets/images/react.svg";
import logo from "./assets/images/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-div">
        <p>
          <i className="subtitle">Made in React </i>
          <img src={reactLogo} className="react-logo" alt="React logo" />
        </p>
        <h1>Nathan Waskiewicz</h1>
        <div className="panel">
          <p>
            Hi! I'm Nate, I'm a software engineer & designer, and I love what I
            do.
            <br />I try to make things beautiful, and I'm always solving
            problems.
          </p>
        </div>
        <br />
        <h2>TODO</h2>
        <div className="checklist">
          <ChecklistItem checked text="The thing of the to be checked" />
          <ChecklistItem text="Create personal website" />
          <ChecklistItem text="Create AWS/GCP project" />
        </div>
        <br />
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <div className="card">Project A</div>
          </div>
          <div className="project">
            <div className="card">Project B</div>
          </div>
          <div className="project">
            <div className="card">Project C</div>
          </div>
          <div className="project">
            <div className="card">Project D</div>
          </div>
          <div className="project">
            <div className="card">Project E</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src={logo}
        width={50}
        height={50}
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

export default App;
