import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const firebase = require("firebase");

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // Check if user is logged in
      if (user) {
        // this.setState({ user: user });
        // console.log(user.email);

        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(idToken => {
            console.log(idToken);
            // p.setState({ token: idToken });
          })
          .catch(function(error) {
            // Handle error
          });
      } else {
        console.log("log in again");
      }
    });
  }

  render() {
    return (
      <Menu>
        <Menu.Item header>Student Q&A</Menu.Item>
        <Menu.Menu position="right">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/login" className="item">
            Login
          </Link>
          <Link to="/signup" className="item">
            Sign Up
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
