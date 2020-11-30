import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../JS/Actions/actions";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    phone: "",
    city: "",
    country: "",
    postalCode: "",
    adresse: "",
    role: "User",
  };

  changeHandler = (e) =>
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  register = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };
  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    ) : localStorage.getItem("token") ? (
      <Redirect to="/login" />
    ) : (
      <div>
        <div className="bold-line"></div>
        <div className="container">
          <div className="window">
            <div className="overlay"></div>
            <div className="content">
              <div className="welcome">Hello There!</div>

              <div className="input-fields">
                <input
                  type="text"
                  placeholder="Username"
                  className="input-line full-width"
                  name="name"
                  onChange={this.changeHandler}
                ></input>
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
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input-line full-width"
                  name="phone"
                  onChange={this.changeHandler}
                ></input>
                <input
                  type="text"
                  placeholder="Country"
                  className="input-line full-width"
                  name="country"
                  onChange={this.changeHandler}
                ></input>
                <input
                  type="text"
                  placeholder="City"
                  className="input-line full-width"
                  name="city"
                  onChange={this.changeHandler}
                ></input>
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="input-line full-width"
                  name="postalCode"
                  onChange={this.changeHandler}
                ></input>
                <input
                  type="text"
                  placeholder="Adresse"
                  className="input-line full-width"
                  name="adresse"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div>
                <button
                  className="ghost-round full-width"
                  onClick={this.register}
                >
                  Create Account
                </button>
              </div>
              <a class="spacing" href="/login">
                You already have an account? Login here.
              </a>
            </div>
          </div>
        </div>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js"
          integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4="
          crossorigin="anonymous"
        ></script>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { register })(Signup);
