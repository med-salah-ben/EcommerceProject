import React, { Component } from "react";

import {
  listProducts,
  removeProduct,
  searchProduct,
} from "../JS/Actions/actionProduct";
import { connect } from "react-redux";
import ModalByNow from "./ModalByNow";
import { Link } from "react-router-dom";
import EditProduct from "./EditProduct";
class HomeScreen extends Component {
  componentDidMount = () => {
    this.props.listProducts();
  };

  deleteProduct = (id) => {
    this.props.removeProduct(id);
  };

  searchProduct = (e) => {
    this.props.searchProduct(e.target.value);
  };

  render() {
    const { profile } = this.props;
    console.log(profile);

    console.log(this.props);
    return (
      <div>
        <div>
          <h2 className="productDes">Check what's new</h2>
          <br />
          <h3 className="productDescription">
            A unlimited products we have to offer
          </h3>
          <input
            type="text"
            className="form-control searchHeader"
            placeholder="Search for..."
            style={{ height: "52px" }}
            name="searchInput"
            onChange={this.searchProduct}
          />
        </div>
        <ul className="products">
          {(this.props.searchInput
            ? this.props.Products.filter((el) =>
                el.name
                  .toLowerCase()
                  .includes(this.props.searchInput.toLowerCase().trim())
              )
            : this.props.Products
          ).map((Product, key) => (
            <li key={key}>
              <div className="cards">
                <div className="cardProducts">
                  <div className="imgProduct">
                    <img src={Product.image} alt="product" />
                  </div>

                  <div className="ProductInfo">
                    <div className="productText">
                      <h1 className="title">{Product.name}</h1>

                      <h2 className="createdBy">
                        Created By:
                        <br />
                        {Product.brand}
                      </h2>
                      <p className="ProductDisc">
                        Product Category:
                        <br />
                        {Product.category}
                      </p>
                    </div>
                    <div className="Price">
                      <p className="cardFooter">
                        <span className="howMuch">{Product.price}</span>TND
                      </p>

                      {profile.role === "User" ? (
                        <button className="ByNow" type="button">
                          <ModalByNow Product={Product} />
                        </button>
                      ) : profile.length === 0 ? (
                        <button className="ByNowLogin" type="button">
                          <Link style={{ color: "black" }} to="/login">
                            login to add to cart
                          </Link>
                        </button>
                      ) : profile.role === "Admin" ? (
                        <div>
                          <button className="EditProduct">
                            <EditProduct product={Product} />
                          </button>
                          <button
                            className="DeleteProduct"
                            onClick={() => this.deleteProduct(Product._id)}
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Products: state.productReducers.Products,
    profile: state.authReducer.profile,
    searchInput: state.productReducers.searchInput,
  };
};

export default connect(mapStateToProps, {
  listProducts,
  removeProduct,
  searchProduct,
})(HomeScreen);
