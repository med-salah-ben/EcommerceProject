import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../JS/Actions/actions";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  changeHandler = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  login = (e) => {
    this.props.login(this.state);
  };
  render() {
    console.log(this.props);
    const { isLoading, error } = this.props;
    return isLoading ? (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    ) : localStorage.getItem("token") ? (
      <Redirect to="/home" />
    ) : (
      <div>
        <div className="bold-line"></div>
        <div className="container">
          <div className="window">
            <div className="overlay"></div>
            <div className="content">
              <div className="welcome">Hello There!</div>
              <span>
                {error === "Bad credentials, check your email" ? (
                  <alert>Please check your email</alert>
                ) : error === "Please check your password" ? (
                  <alert>Please check your password</alert>
                ) : (
                  <></>
                )}
              </span>

              <div className="input-fields">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-line full-width"
                  name="email"
                  onChange={this.changeHandler}
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  className="input-line full-width"
                  name="password"
                  onChange={this.changeHandler}
                ></input>
              </div>

              <div>
                <button
                  className="ghost-round full-width"
                  type="submit"
                  onClick={this.login}
                >
                  Login
                </button>
                <a class="spacing" href="/register">
                  You don't have an account? Sign Up here.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  error: state.authReducer.error,
});

export default connect(mapStateToProps, { login })(Signin);
