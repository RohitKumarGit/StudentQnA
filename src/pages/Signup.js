import React, { Component } from "react";
import { Form, Input, Radio } from "semantic-ui-react";

import { Link } from "react-router-dom";

const firebase = require("firebase");
const axios = require("axios");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "student",
      colleges: ["A", "B", "C"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

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

  handleOptionChange(e, { value }) {
    this.setState({
      role: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("signing..");

    var req;
    if (this.state.role === "student") {
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
      const classes = [
        { key: "m", text: "Male", value: "male" },
        { key: "f", text: "Female", value: "female" },
        { key: "o", text: "Other", value: "other" }
      ];

      formContent = (
        // <div class="field">
        //   <label>Country</label>
        //   <select class="ui search dropdown">
        //     <option value="">Select Country</option>
        //     <option value="XI">XI</option>
        //     <option value="XII">XII</option>
        //     <option value="X">X</option>
        //   </select>
        // </div>
        <Form.Group>
          <Form.Select id="class" label="Class" options={classes} />
        </Form.Group>
      );
    } else {
      const years = [
        { text: 2020, value: 2020 },
        { text: 2019, value: 2019 },
        { text: 2018, value: 2018 },
        { text: 2017, value: 2017 }
      ];

      formContent = (
        <>
          <Form.Field>
            <label>College</label>
            <Input name="college" />
          </Form.Field>

          <Form.Field>
            <label>Branch</label>
            <Input name="branch" />
          </Form.Field>

          <Form.Group>
            <Form.Select id="year" label="Year of admission" options={years} />
          </Form.Group>
        </>
      );
    }

    return (
      <div class="ui grid middle aligned main-content">
        {/* <div class="row"> */}
        <div class="column">
          <form class="ui form" onSubmit={this.handleSubmit}>
            <h2 class="ui header">Sign Up</h2>

            <Form.Group className="fields--radio">
              <Form.Field>
                <label>Please enter your role:</label>
              </Form.Field>

              <Form.Field>
                <Radio
                  label="Student"
                  name="role"
                  value="student"
                  checked={this.state.role === "student"}
                  onChange={this.handleOptionChange}
                />
              </Form.Field>

              <Form.Field>
                <Radio
                  label="Expert"
                  name="role"
                  value="expert"
                  checked={this.state.role === "expert"}
                  onChange={this.handleOptionChange}
                />
              </Form.Field>
            </Form.Group>

            {formContent}

            <Form.Field>
              <label>Name</label>
              <Input name="name" />
            </Form.Field>

            <Form.Field>
              <label>Email</label>
              <Input name="email" type="email" />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <Input name="password" type="password" />
            </Form.Field>

            <Form.Field>
              <label>Confirm Password</label>
              <Input name="confirm-password" type="password" />
            </Form.Field>

            {/* <Form.Field> */}
            {/* <Input type="submit" value="login" /> */}
            {/* </Form.Field> */}

            <button class="fluid ui primary button" type="submit">
              Sign up
            </button>

            <p>
              Already have an account? <Link to="/login">Login</Link>.
            </p>
          </form>
        </div>
      </div>
    );
  }
}
