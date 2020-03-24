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
        <div class="field">
          <label>Country</label>
          <select class="ui search dropdown">
            <option value="">Select Country</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
            <option value="X">X</option>
          </select>
        </div>
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
      <div class="ui grid middle aligned main-content">
        {/* <div class="row"> */}
        <div class="column">
          <form class="ui form">
            <h2 class="ui header">Sign Up</h2>
            <div class="inline fields">
              <label for="fruit">Please select your role:</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input
                    type="radio"
                    name="student"
                    tabindex="0"
                    class="hidden"
                  />
                  <label>Student</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input
                    type="radio"
                    name="expert"
                    tabindex="0"
                    class="hidden"
                  />
                  <label>Expert</label>
                </div>
              </div>
            </div>

            {formContent}

            <div class="field">
              <label>Name</label>
              <input type="email" name="email" />
            </div>
            <div class="field">
              <label>Email</label>
              <input type="password" name="password" />
            </div>
            <div class="field">
              <label>Password</label>
              <input type="password" name="password" />
            </div>
            <div class="field">
              <label>Confirm Password</label>
              <input type="password" name="password" />
            </div>
            <button class="fluid ui primary button" type="submit">
              Sign up
            </button>
            <p>
              Already have an account? <a href="/login">Login</a>.
            </p>
          </form>
        </div>
      </div>
    );
  }
}
