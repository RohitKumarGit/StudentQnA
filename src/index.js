import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Comonents

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Error from "./Error";
import "./style.css";
import ExpertProfile from "./ExpertProfile";
const firebase = require("firebase");

let firebaseConfig = {
  apiKey: "AIzaSyB6fHJLK895282ymZUFn1GHCoa58eR8Bg0",
  authDomain: "studentqna-d44ff.firebaseapp.com",
  databaseURL: "https://studentqna-d44ff.firebaseio.com",
  projectId: "studentqna-d44ff",
  storageBucket: "studentqna-d44ff.appspot.com",
  messagingSenderId: "84493747418",
  appId: "1:84493747418:web:052528d8fb89e5add4d1e3",
  measurementId: "G-W2P5T2V3S2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Stylesheet

function App() {
  return (
    <>
      <main class="main-container">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile/:id" component={Profile} exact />
          <Route path="/expert-profile" component={ExpertProfile} />
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
