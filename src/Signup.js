import React from "react";
import { Link } from "react-router-dom";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "student"
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
            <input class="form__input" type="text" name="class" />
          </div>
        </>
      );
    } else {
      formContent = (
        <>
          <div class="form__group">
            <label class="form__label">Collage</label>
            <input class="form__input" type="text" name="collage" />
          </div>

          <div class="form__group">
            <label class="form__label">Branch</label>
            <input class="form__input" type="text" name="class" />
          </div>

          <div class="form__group">
            <label class="form__label">Year of admission</label>
            <input class="form__input" type="text" name="class" />
          </div>
        </>
      );
    }

    return (
      <main class="main-content main-content--center">
        <form class="form">
          <header class="form__header">
            <h1>Sign Up</h1>
          </header>

          

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
