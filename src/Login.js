import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Grid, Form, Header, Button } from "semantic-ui-react";

const axios = require("axios");
const firebase = require("firebase");

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailErr: "",
      password: "",
      passwordErr: "",
      formErr: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm(form, type) {
    let valid = true;

    if (type === "all" || type === "email") {
      let emailErr = "";

      // Check if no email has been set
      if (form.email.value.length === 0) {
        emailErr = "Please enter your email.";
        valid = false;
      } else {
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(form.email.value.toLowerCase())) {
          emailErr = "Please enter a valid email.";
          valid = false;
        }
      }

      form.email.setCustomValidity(emailErr);

      this.setState({
        emailErr: emailErr
      });
    }

    if (type === "all" || type === "password") {
      let passwordErr = "";

      if (form.password.value.length === 0) {
        passwordErr = "Please enter your password.";
        valid = false;
      }

      form.password.setCustomValidity(passwordErr);

      this.setState({
        passwordErr: passwordErr
      });
    }

    return valid;
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });

    const formHelperElement = target.parentElement.querySelector(
      ".form__helper"
    );

    this.validateForm(event.target.form, name);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("logging")
    const emailElement = event.target.email;
    const passwordElement = event.target.password;

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Check if form is valid
    if (!this.validateForm(event.target, "all")) {
      return false;
    }

    // Attempt to authorize user
    firebase
      .auth()
      .signInWithEmailAndPassword(emailElement.value, passwordElement.value)
      .catch(err => {
        let errCode = err.code;
        let formErr = "";

        if (
          errCode === "auth/invalid-email" ||
          errCode === "auth/user-not-found" ||
          errCode === "auth/wrong-password"
        ) {
          formErr = "Username or password is incorrect.";
        } else {
          formErr = "An unexpected error occured.";
          console.log(err.code);
        }

        this.setState({
          formErr: formErr
        });
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("/user/" + email)
          .then(response => {
            console.log("logged");
            // set(response.data);
            console.log(response.data); // if the user is logged response.data has all the user details
            this.setState({ user: response.data });
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        // if user is not logged
      }
    });
  }

  render() {
    return (
<<<<<<< HEAD
      // <div class="main-content main-content--center">
      <div class="ui grid middle aligned main-content">
        {/* <div class="row"> */}
        <div class="column">
          <form class="ui form" onSubmit={this.handleSubmit}>
            <h2 class="ui header">Login</h2>
            <div class="field">
=======
      <Grid middle aligned verticalAlign="middle" className="main-content">
        <Grid.Column>
          <Form>
            <Header as="h2">Login</Header>

            <Form.Field>
>>>>>>> 0474b4d3f84ddee75a59ec971ea5cb0ff842bb58
              <label>Email</label>
              <input type="email" name="email" />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input type="password" name="password" />
            </Form.Field>

            <Form.Field>
              <Link to="/password-reset">I forgot my password</Link>
            </Form.Field>

            <Button fluid primary type="submit">
              Login
            </Button>

            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>.
            </p>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
