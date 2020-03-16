// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Error from "./Error";

import "./style.css";

function Navbar() {
  //   return (
  //     <div>
  //       <Link to="/">Home</Link>
  //       <Link to="/login">Login</Link>
  //     </div>
  //   );
  return (
    <header class="navbar-wrapper">
      <nav class="navbar">
        <a href="#" class="navbar__title">
          Title
        </a>
        <ul class="navbar__items">
          <li class="navbar__item">
            <a href="" class="navbar__link">
              Home
            </a>
          </li>
          <li class="navbar__item">
            <a href="" class="navbar__link">
              Login
            </a>
          </li>
          <li class="navbar__item">
            <a href="" class="navbar__link">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <main class="main-container">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
