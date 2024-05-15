import reactLogo from "./assets/images/react.svg";
import logo from "./assets/images/logo.svg";
import gcp from "./assets/images/gcp.png";
import bandit from "./assets/images/bandit-cropped.png";
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
          <ChecklistItem checked text="Personal website" />
          <ChecklistItem text="AWS/GCP project" />
          <ChecklistItem text="Finish developing a game" />
          <ChecklistItem checked text="Beat Bandit CTF" />
        </div>
        <br />
        <h2>Projects</h2>
        <div className="projects">
          <Project
            name="Bandit CTF"
            image={bandit}
            description="I remember starting this in high school. Now I finally finished
            this challenge! A beginner friendly CTF style challenge teaching
            you the basics of shell scripting."
          />
          <Project
            name="GCP/AWS Project"
            image={gcp}
            description="Coming Soon!"
          />
        </div>
      </div>
      <br />
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

function Project(props) {
  return (
    <div className="project">
      <div className="card-title">{props.name}</div>
      <img className="card-image" src={props.image} alt="Project logo"></img>
      <span className="card-description">{props.description}</span>
    </div>
  );
}

export default App;
