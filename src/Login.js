import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();

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
          </div>

          <div class="form__group">
            <p>
              <a class="link" href="#">
                I forgot my password
              </a>
            </p>
          </div>

          <div class="form__group">
            <input class="btn" type="submit" value="Login" />
          </div>

          <p class="form__info">
            Don't have an account?{" "}
            <a class="link" href="#">
              Sign up
            </a>
            .
          </p>
        </form>
      </div>
    );
  }
}
export default Login;
