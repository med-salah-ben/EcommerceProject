import React, { Component } from "react";
import { connect } from "react-redux";
import { saveShipping } from "../JS/Actions/actionOrder";

import { Button, FormGroup, Input, Modal, Label } from "reactstrap";

class Shipping extends Component {
  state = {
    userID: this.props.profile._id,
    name: this.props.profile.name,
    phone: this.props.profile.phone,

    nameProduct: this.props.listCart.name,

    date: Date.now(),
    adresse: "",
    city: "",
    postalCode: "",
    country: "",
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addShipping = () => {
    this.props.saveShipping(this.state);
  };

  render() {
    console.log(this.props.listCart);

    return (
      <div>
        <span onClick={this.toggle}>Confirm</span>
        <Modal
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          modalClassName="modal-register"
          className="ModalDetail"
        >
          <div className="modal-header no-border-header text-center">
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.toggle}
            >
              <span aria-hidden={true}>×</span>
            </button>
            <h6 className="text-muted">Ecommerce</h6>
            <h3 className="modal-title text-center">Shipping</h3>
            <p className="modalP">Choose Your Details</p>
          </div>
          <div className="modal-body">
            <FormGroup>
              <Label for="exampleSelect1">Adresse</Label>
              <Input
                name="adresse"
                required
                onChange={this.handleChange}
              ></Input>
              <Label for="exampleSelect1">City</Label>
              <Input name="city" required onChange={this.handleChange}></Input>
              <Label for="exampleSelect1">Code Postal</Label>
              <Input
                name="postalCode"
                required
                onChange={this.handleChange}
              ></Input>
              <Label for="exampleSelect1">Country</Label>
              <Input
                name="country"
                required
                onChange={this.handleChange}
              ></Input>
            </FormGroup>
            <Button
              block
              className="btn-round"
              color="default"
              onClick={() => {
                this.addShipping();
                this.toggle();
              }}
            >
              Add Shipping
            </Button>
          </div>
          <div className="modal-footer no-border-footer ">
            <span className="text-muted text-center">
              Add Item To Your Shopping Cart
            </span>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.authReducer.profile,
  };
};

export default connect(mapStateToProps, { saveShipping })(Shipping);
