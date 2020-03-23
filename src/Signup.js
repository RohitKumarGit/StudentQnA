import React from "react";
import { Link } from "react-router-dom";

const firebase = require("firebase");
const axios = require("axios");
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "student",
      colleges: ["A", "B", "C"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleOptionChange(event) {
    this.setState({
      role: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("signing..");
    var req;
    if (this.state.role == "student") {
      console.log("student");
      req = {
        name: event.target.name.value,
        email: event.target.email.value,
        role: event.target.role.value,
        profileUrl: "none",
        class: document.getElementById("class").value
      };
    } else {
      req = {
        name: event.target.name.value,
        email: event.target.email.value,
        role: event.target.role.value,
        profileUrl: "none",
        yearOfAdmission: document.getElementById("year").value,
        branch: event.target.branch.value
      };
    }

    let error = false;
    firebase
      .auth()
      .createUserWithEmailAndPassword(req.email, event.target.password.value)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        error = true;
      });

    var n = 0;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user && n === 0 && error === false) {
        axios
          .post("/createuser", req)
          .then(res => {
            if (res.data === true) {
              console.log("user already exists in db"); // IF res.data is true then user already exists
            } else {
              console.log("success");
              n++;
              axios
                .get("/user/" + req.email)
                .then(function(response) {
                  console.log(response.data); // this response.data conatins all the user info
                })
                .catch(e => {
                  console.log(e);
                });
            }
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
    console.log(
      `The form was submitted: ${this.state.email} - ${this.state.password}`
    );
  }

  render() {
    let formContent;

    if (this.state.role === "student") {
      formContent = (
        <>
          <div class="form__group">
            <label class="form__label">Class studying</label>

            <select id="class" className="form__input">
              <option value="XI">XI</option>
              <option value="XII">XII</option>
              <option value="X">X</option>
            </select>
          </div>
        </>
      );
    } else {
      formContent = (
        <>
          <div class="form__group">
            <label class="form__label">College</label>
            <input class="form__input" type="text" name="college" />
          </div>

          <div class="form__group">
            <label class="form__label">Branch</label>
            <input class="form__input" type="text" name="branch" />
          </div>

          <div class="form__group">
            <label class="form__label">Year of admission</label>
            <select id="year" className="form__input">
              <option value="volvo">2020</option>
              <option value="volvo">2019</option>
              <option value="saab">2017</option>
              <option value="mercedes">2016</option>
              <option value="mercedes">2015</option>
            </select>
          </div>
        </>
      );
    }

    return (
      <main class="main-content main-content--center">
        <form class="form" onSubmit={this.handleSubmit}>
          <header class="form__header">
            <h1>Sign Up</h1>
          </header>

          <div class="form__group">
            <p class="form__radio-info">Please select your role:</p>
            <div className="fl">
              <label class="form__radio-label">
                <input
                  class="form__radio"
                  type="radio"
                  name="role"
                  value="student"
                  checked={this.state.role === "student"}
                  onChange={this.handleOptionChange}
                />
                Student
              </label>
              <label class="form__radio-label">
                <input
                  class="form__radio"
                  type="radio"
                  name="role"
                  value="expert"
                  checked={this.state.role === "expert"}
                  onChange={this.handleOptionChange}
                />
                Expert
              </label>
            </div>
          </div>

          <div class="form__group">
            <label class="form__label">Name</label>
            <input class="form__input" type="text" name="name" />
          </div>

          <div class="form__group">
            <label class="form__label">Email</label>
            <input class="form__input" type="text" name="email" />
          </div>

          {formContent}

          <div class="form__group">
            <label class="form__label">Password</label>
            <input class="form__input" type="password" name="password" />
          </div>

          <div class="form__group">
            <label class="form__label">Confirm password</label>
            <input
              class="form__input"
              type="password"
              name="confirm-password"
            />
          </div>

          <div class="form__group">
            <input class="btn" type="submit" value="Sign up" />
          </div>

          <p class="form__info">
            Already have an account?{" "}
            <Link class="link" to="/login">
              Login
            </Link>
            .
          </p>
        </form>
      </main>
    );
  }
}
