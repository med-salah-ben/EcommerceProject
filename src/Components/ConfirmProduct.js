import React, { Component } from "react";
import { listConfirmCart } from "../JS/Actions/actionCart";
import { connect } from "react-redux";

class ConfirmProduct extends Component {
  componentDidMount = () => {
    this.props.listConfirmCart(this.props.userId);
  };

  render() {
    const confirmCart = this.props.confirmCart;
    console.log(confirmCart);

    return (
      <div>
        <div className="cart">
          <div className="cart-list">
            <h1>Name : {this.props.profile.name}</h1>
            <h1>Phone : {this.props.profile.phone}</h1>
            <ul className="cart-list-container">
              <li>
                <h3>Shopping Cart</h3>

                <div>Price</div>
              </li>
              <div className="content content-margined">
                <div className="order-header">
                  <h1>Orders</h1>
                </div>
                <div className="order-list">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>ProductID</th>

                        <th>Qte</th>
                        <th>Size</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Etat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {confirmCart.length === 0 ? (
                        <div>Confirm Cart is empty</div>
                      ) : (
                        confirmCart.map((el, key) => (
                          <tr key={key}>
                            <td>
                              <img
                                style={{ width: "70px" }}
                                src={el.image}
                                alt="confirm Product"
                              />
                            </td>
                            <td>{el.productId}</td>

                            <td>
                              <span> {el.quantity}</span>
                            </td>
                            <td> {el.size}</td>
                            <td> {el.name}</td>

                            <td>
                              <span>{el.price}</span>TND
                            </td>
                            <td>{el.quantity * el.price} TND</td>
                            <td> {el.etat} </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </ul>
          </div>
          <div className="cart-action">
            {" "}
            <h1> Shipping details</h1>
            <h3>country : {this.props.profile.country}</h3>
            <h3>City : {this.props.profile.city}</h3>
            <h3>Adresse : {this.props.profile.adresse}</h3>
            <h3>Postal Code : {this.props.profile.postalCode}</h3>
            <h3>
              <h1>SubTotal</h1>
              Tolal Qte : {confirmCart.reduce((Q, P) => Q + P.quantity, 0)}{" "}
              Items
              <br /> Total Price : TND
              {confirmCart.reduce((Q, P) => Q + P.price * P.quantity, 0)}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.id,
    confirmCart: state.cartReducer.ListConfirm,
    profile: state.authReducer.profile,
  };
};

export default connect(mapStateToProps, { listConfirmCart })(ConfirmProduct);
