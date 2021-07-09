import Header from "./components/Header";
import "./App.css";

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="header">
        <h1>Gregory Tookes</h1>
        <div>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
            <li>
              <a href="Resume.pdf">Resume</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="hero">
        <h2>Cool Subtitle Here</h2>
      </div> */}

      {/* <div className="content">
        <div className="row">
          <div className="column left" style={{ backgroundColor: "#aaa" }}>
            <h2>About Me</h2> */}
      {/* <img src="dsc00009.jpg" style="width: 250px; height:250px;"></img> */}
      {/* </div>
          <div className="column right" style={{ backgroundColor: "#bbb" }}>
            <p>
              My name is Gregory Tookes, and I decided to change my occupation
              after two years of working in a warehouse. I still like
              communicating with people and work in a team. I would like to
              change my career from warehousing to software engineering. As an
              engineer, I would learn how to together as a team and learn what
              it takes to be successful in the engineering field.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="work2"> */}
      {/* <form>
            <br></br><br></br>
            <label for="fname">Name</label>
            <input type="text" id="fname" name="fname"></input><br></br><br></br>
            <label for="lname">Email</label>
            <input type="text" id="lname" name="lname"><br></br><br></br>
            <label for="comments">Comments</label>
            <input type="text" id="text" name="comments">
            <br></br><br></br>
            <input type="submit" id="button" value="Submit">
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
        </form> */}
      {/* <div className="row-2">
          <div className="column left" style={{ backgroundColor: "#aaa" }}>
            <h2 id="work">Work</h2>
          </div>
          <div className="column right" style={{ backgroundColor: "#bbb" }}>
            <div className="grid-container">
              <div className="grid-item">
                <h3>Individual Projects</h3>
                <a href="https://gtook101.github.io/homework1">Project 1</a>
                <a href="https://gtook101.github.io/homework3">Project 3</a>
                <a href="https://gtook101.github.io/homework6">Project 6</a>
              </div>

              <div className="grid-item">
                <h2>Team Projects</h2>
                <a href="">Team Project 1</a>
              </div>

              <div className="grid-item">
                <h2>Red Wall</h2>
              </div>
              <div className="grid-item">
                <h2>Calculator</h2>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      <div className="bottom">
        <h2 id="contact-me">Contact Me</h2>
        <div>
          <ul>
            <li>
              <a href="#850-226-1767">850-226-1767</a>
            </li>
            <li>
              <a href="#gtook10@gmail.com">gtook10@gmail.com</a>
            </li>
            <li>
              <a href="#github.com/gtook101">github.com/gtook101</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/gregory-tookes-99919535">
                linkedin.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
