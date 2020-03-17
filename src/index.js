// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error";

import "./style.css";

function Navbar() {


  return (
    
    <header class="navbar-wrapper">
      <style>
          @import url('https://fonts.googleapis.com/css?family=Cabin:500&display=swap');
      </style>
      <nav class="navbar">
        <Link to="/" class="navbar__title">
          Title
        </Link>
        <ul class="navbar__items">
          <li class="navbar__item">
            <Link to="/" class="navbar__link">
              Home
            </Link>
          </li>
          <li class="navbar__item">
            <Link to="/login" class="navbar__link">
              Login
            </Link>
          </li>
          <li class="navbar__item">
            <Link to="/signup" class="navbar__link">
              Sign up
            </Link>
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
          <Route path="/signup" component={Signup} />
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
