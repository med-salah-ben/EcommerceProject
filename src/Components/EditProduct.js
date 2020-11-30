import React, { Component } from "react";
import { connect } from "react-redux";

import { updateProduct } from "../JS/Actions/actionProduct";

import { Button, FormGroup, Input, Modal, Label } from "reactstrap";

class EditProduct extends Component {
  state = {
    isOpen: false,

    price: this.props.product.price,
    name: this.props.product.name,
    image: this.props.product.image,
    brand: this.props.product.brand,
    countInStock: this.props.product.countInStock,
    category: this.props.product.category,
    description: this.props.product.description,
  };
  handleUpadteChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  EditProduct = (e) => {
    this.props.updateProduct(this.props.product._id, this.state);
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="divBord">
        <span className="btnModalCart" onClick={this.toggle}>
          Edit
        </span>
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
            <h3 className="modal-title text-center">Welcome</h3>
            <p className="modalP">Edit Your Details</p>
          </div>

          <div className="modal-body">
            <FormGroup>
              <Label for="exampleSelect1">Name</Label>
              <Input
                name="name"
                onChange={this.handleUpadteChange}
                defaultValue={this.props.product.name}
              ></Input>
              <Label for="exampleSelect1">Image</Label>
              <Input
                name="image"
                onChange={this.handleUpadteChange}
                defaultValue={this.props.product.image}
              ></Input>
              <Label for="exampleSelect1">Price</Label>
              <Input
                name="price"
                onChange={this.handleUpadteChange}
                defaultValue={this.props.product.price}
              ></Input>
              <Label for="exampleSelect1">Category</Label>
              <Input
                name="category"
                onChange={this.handleUpadteChange}
                defaultValue={this.props.product.category}
              ></Input>
              <Label for="exampleSelect1">Discription</Label>
              <Input
                name="description"
                onChange={this.handleUpadteChange}
                defaultValue={this.props.product.description}
              ></Input>
              <Label for="exampleSelect1">Count in stock</Label>
              <Input
                name="countInStock"
                onChange={this.handleUpadteChange}
                defaultValue={this.props.product.countInStock}
              ></Input>
            </FormGroup>
            <Button
              block
              className="btn-round"
              color="default"
              onClick={() => {
                this.EditProduct();
                this.toggle();
              }}
            >
              Add To Cart
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

export default connect(null, { updateProduct })(EditProduct);
