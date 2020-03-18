import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require('axios');
const firebase = require('firebase');
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {}

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

    switch (name) {
      case "email":
        if (value.length === 0) {
          formHelperElement.innerText = "Please enter your username.";
          target.setCustomValidity("Please enter your username.");
        } else {
          formHelperElement.innerText = "";
          target.setCustomValidity("");
        }

        break;

      case "password":
        if (value.length === 0) {
          formHelperElement.innerText = "Please enter your password.";
          target.setCustomValidity("Please enter your password.");
        } else {
          formHelperElement.innerText = "";
          target.setCustomValidity("");
        }

        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    // TODO: Check if form is valid
    // TODO: Attempt to authorize user
    const email = event.target.email.value;
    firebase.auth().signInWithEmailAndPassword(event.target.email.value, event.target.password.value).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode,errorMessage);
    });
    const set = function(data){
      
    }
    const m = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        axios.get('/user/'+email).then((response)=>{
          console.log("logged")
          set(response.data)
          m.setState({user:response.data})
        }).catch((e)=>{
          console.log(e)
        });
      } 
    });
    console.log(
      `The form was submitted: ${this.state.email} - ${this.state.password}`
    );
  }

  render() {
    return (
      <div class="main-content main-content--center">
        <form onSubmit={this.handleSubmit} class="form">
          <header class="form__header">
            <h1>Login</h1>
          </header>

          <div class="form__group">
            <label class="form__label">Email or username</label>
            <input
              class="form__input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <span class="form__helper"></span>
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
            <span class="form__helper"></span>
          </div>

          <div class="form__group">
            <p>
              <Link class="link" to="/reset-password">
                I forgot my password
              </Link>
            </p>
          </div>

          <div class="form__group">
            <input class="btn" type="submit" value="Login" />
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
