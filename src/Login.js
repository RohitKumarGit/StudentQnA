import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");
const firebase = require("firebase");
class Login extends Component {
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

    // console.log(event.target);

    this.validateForm(event.target.form, name);

    // switch (name) {
    //   case "email":
    //     if (value.length === 0) {
    //       formHelperElement.innerText = "Please enter your username.";
    //       target.setCustomValidity("Please enter your username.");
    //     } else {
    //       formHelperElement.innerText = "";
    //       target.setCustomValidity("");
    //     }

    //     break;

    //   case "password":
    //     if (value.length === 0) {
    //       formHelperElement.innerText = "Please enter your password.";
    //       target.setCustomValidity("Please enter your password.");
    //     } else {
    //       formHelperElement.innerText = "";
    //       target.setCustomValidity("");
    //     }

    //     break;
    // }
  }

  handleSubmit(event) {
    event.preventDefault();

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
      <div class="main-content main-content--center">
        <form onSubmit={this.handleSubmit} class="form">
          <header class="form__header">
            <h1>Login</h1>
          </header>

          <div class="form__group">
            <label class="form__label">Email</label>
            <input
              class="form__input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <span class="form__helper">{this.state.emailErr}</span>
          </div>

          <div class="form__group">
            <label class="form__label">Password</label>
            <input
              class="form__input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span class="form__helper">{this.state.passwordErr}</span>
          </div>

          <div class="form__group">
            <p>
              <Link class="link" to="/password-reset">
                I forgot my password
              </Link>
            </p>
          </div>

          <div class="form__group">
            <input class="btn" type="submit" value="Login" />
            <span class="form__helper">{this.state.formErr}</span>
          </div>

          <p class="form__info">
            Don't have an account?{" "}
            <Link class="link" to="/signup">
              Sign up
            </Link>
            .
          </p>
        </form>
      </div>
    );
  }
}
export default Login;
