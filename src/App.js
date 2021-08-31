import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Project from "./components/project/project"
import backgroundPic from "./assets/backgroundPic.jpg"

function App() {
  return (
    <Router >
      <div className="App">
      <header><h1>Simon Soold</h1></header>
      <div className="image"><img src={backgroundPic} alt=""></img></div>
      <nav>
        <ul>
        <li>
            <Link to="/about">Home</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
            <Project></Project>
          </Route>
        </Switch>
      </main>
      </div>
    </Router>
  );
}

export default App;
