import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ExpertProfile from "./pages/ExpertProfile";
import Error from "./pages/Error";
import Settings from "./pages/Settings";
import Question from "./pages/Question";

// Styles
import "./style.css";

const firebase = require("firebase");

let firebaseConfig = {
  apiKey: "AIzaSyB6fHJLK895282ymZUFn1GHCoa58eR8Bg0",
  authDomain: "studentqna-d44ff.firebaseapp.com",
  databaseURL: "https://studentqna-d44ff.firebaseio.com",
  projectId: "studentqna-d44ff",
  storageBucket: "studentqna-d44ff.appspot.com",
  messagingSenderId: "84493747418",
  appId: "1:84493747418:web:052528d8fb89e5add4d1e3",
  measurementId: "G-W2P5T2V3S2",
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
          <Route path="/expert-profile" component={ExpertProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="/question" component={Question} />
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
