import React, { Component } from "react";
import { connect } from "react-redux";
import { addAdmin } from "../JS/Actions/actions";
import { Row, Col, Input, Form, FormGroup, Label } from "reactstrap";
class AddAdmin extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "Admin",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  add = (e) => {
    e.preventDefault(e);
    let name = document.form.name.value;
    let email = document.form.email.value;
    let password = document.form.password.value;
    let phone = document.form.phone.value;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (name === "" || email === "" || password === "" || phone === "") {
      alert("Please Input The Text");
    } else if (!reg.test(email)) {
      alert("Please Check your E-mail !!");
    } else if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      password.length < 10
    ) {
      alert("Bad Password !!");
    } else {
      this.props.addAdmin(this.state);
    }
  };

  render() {
    const { profile } = this.props;

    return (
      <div>
        {profile.role === "Admin" ? (
          <div className="">
            <h1 className="page-title">
              Add - <span className="fw-semi-bold">Admin</span>
            </h1>
            <div>
              <Row>
                <Col lg={9} xs={12}>
                  {
                    <h5>
                      <span className="fw-semi-bold">Add Admin</span>
                    </h5>
                  }

                  <Form name="form">
                    <FormGroup>
                      <Label>Name Admin</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Email Admin</Label>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Password Admin</Label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Phone Admin</Label>
                      <Input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>

                    <button
                      className="btn-rounded-f width-100 mb-xs mr-xs btn btn-success"
                      type="submit"
                      onClick={this.add}
                    >
                      Submit
                    </button>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.authReducer.profile,
});
export default connect(mapStateToProps, { addAdmin })(AddAdmin);
