import React from "react";
import { connect } from "react-redux";
import { saveProduct } from "../JS/Actions/actionProduct";

import { Row, Col, Input, Form, FormGroup, Label } from "reactstrap";

class AddProduct extends React.Component {
  state = {
    name: "",
    price: 0,
    countInStock: 0,
    image: "",
    brand: "",
    category: "",
    description: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  add = (e) => {
    e.preventDefault();
    let name = document.form.name.value;
    let price = document.form.price.value;
    let countInStock = document.form.countInStock.value;
    let brand = document.form.brand.value;
    let category = document.form.category.value;
    let image = document.form.image.value;
    if (
      name === "" ||
      price === "" ||
      countInStock === "" ||
      brand === "" ||
      category === "" ||
      image === ""
    ) {
      alert("Please Input The Text");
    } else {
      alert("Product has been created");
      this.props.saveProduct(this.state);
    }
  };

  render() {
    const { profile } = this.props;

    console.log(this.props);
    return (
      <div style={{ marginTop: "50px" }}>
        {profile.role === "Admin" ? (
          <div className="">
            <h1 className="page-title">
              Add - <span className="fw-semi-bold">Products</span>
            </h1>
            <div>
              <Row>
                <Col lg={9} xs={12}>
                  <Form name="form">
                    <FormGroup>
                      <Label>Name Product</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Price of Product</Label>
                      <Input
                        type="number"
                        name="price"
                        placeholder="Enter Adresse"
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Count In Stock</Label>
                      <Input
                        type="number"
                        name="countInStock"
                        placeholder="Count In Stock"
                        onChange={this.handleInputChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Brand</Label>
                      <Input
                        type="text"
                        name="brand"
                        placeholder="brand"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>category</Label>
                      <select
                        className="form-control"
                        name="category"
                        onChange={this.handleInputChange}
                        required
                      >
                        <option selected>Choose the categorie</option>
                        <option value="accesoires">Accesoires</option>
                        <option value="shirts">Shirts</option>
                        <option value="pants">Pants</option>
                        <option value="shoes">Shoes</option>
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <Label>Image</Label>
                      <Input
                        type="text"
                        name="image"
                        placeholder="Enter image"
                        onChange={this.handleInputChange}
                        className="display-none"
                      ></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Description</Label>
                      <Input
                        type="textarea"
                        name="description"
                        placeholder="Enter Description"
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

export default connect(mapStateToProps, { saveProduct })(AddProduct);
