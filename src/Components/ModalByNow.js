import React, { Component } from "react";
import { connect } from "react-redux";
import { savePanier } from "../JS/Actions/actionPanier";

import { Button, FormGroup, Input, Modal, Label } from "reactstrap";

class ModalByNow extends Component {
  state = {
    isOpen: false,
    size: "",
    quantity: 0,
    userId: this.props.userId,
    productId: this.props.Product._id,
    price: this.props.Product.price,
    etat: "InProgress",
    name: this.props.Product.name,
    image: this.props.Product.image,
    city: this.props.profile.city,
    country: this.props.profile.country,
    postalCode: this.props.profile.postalCode,
    adresse: this.props.profile.adresse,
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

  addPanier = () => {
    this.props.savePanier(this.state);
  };
  render() {
    const Category = this.props.Product.category;

    return (
      <div className="divBord">
        <span className="btnModalCart" onClick={this.toggle}>
          Add to cart
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
            <h6 className="text-muted">{this.state.etat}</h6>
            <h3 className="modal-title text-center">{this.state.name}</h3>
            <p className="modalP">Choose Your Details</p>
          </div>
          <div className="modal-body">
            <FormGroup>
              <Label for="exampleSelect1">Quantity</Label>
              <Input type="select" name="quantity" onChange={this.handleChange}>
                <option selected>Choose the Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Input>
            </FormGroup>
            <FormGroup>
              {Category === "shoes" ? (
                <FormGroup>
                  <Label for="exampleSelect1">Size</Label>
                  <Input type="select" name="size" onChange={this.handleChange}>
                    <option selected>Choose the Size</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option>
                  </Input>
                </FormGroup>
              ) : Category === "shirts" ? (
                <FormGroup>
                  <Label for="exampleSelect1">Size</Label>
                  <Input type="select" name="size" onChange={this.handleChange}>
                    <option selected>Choose the Size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </Input>
                </FormGroup>
              ) : Category === "pants" ? (
                <FormGroup>
                  <Label for="exampleSelect1">Size</Label>
                  <Input type="select" name="size" onChange={this.handleChange}>
                    <option selected>Choose the Size </option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option>
                  </Input>
                </FormGroup>
              ) : Category === "accesoires" ? (
                <FormGroup>
                  <Label for="exampleSelect1">Size</Label>
                  <Input type="select" name="size" onChange={this.handleChange}>
                    <option selected>Choose the Size </option>
                    <option>Small</option>
                    <option>Standard</option>
                    <option>Large</option>
                  </Input>
                </FormGroup>
              ) : (
                <div></div>
              )}
            </FormGroup>

            <Button
              block
              className="btn-round"
              color="default"
              onClick={() => {
                this.addPanier();
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

const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.id,
    Products: state.productReducers.Products,
    profile: state.authReducer.profile,
  };
};

export default connect(mapStateToProps, { savePanier })(ModalByNow);
