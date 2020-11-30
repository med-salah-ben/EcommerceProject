import React, { Component } from "react";

import { connect } from "react-redux";

import { listAllConfirmCart, removeFromCart } from "../JS/Actions/actionCart";

import { getAllUsers } from "../JS/Actions/actions";
import { Button } from "reactstrap";

class OrderAdmin extends Component {
  componentDidMount = () => {
    this.props.listAllConfirmCart();
    this.props.getAllUsers();
  };

  delete = (id) => {
    this.props.removeFromCart(id);
  };

  render() {
    console.log(this.props.Allusers);
    return (
      <div className="content content-margined">
        <div className="order-header">
          <h2 style={{ marginTop: "70px" }} className="productDes">
            All Command List
          </h2>
          <h3 style={{ marginTop: "30px" }} className="productDescription">
            Found Users Command By ID
          </h3>
        </div>
        <div className="order-list">
          <table className="table">
            <thead>
              <tr>
                <th>Name And Phone Users</th>

                <th>ProductName</th>
                <th>Price</th>
                <th>Qte</th>
                <th>Size</th>
                <th>Etat</th>
                <th>Confirm Date</th>
                <th>Total Price TND</th>
                <th>Delete Order</th>
              </tr>
            </thead>
            <tbody>
              {this.props.confirmCart.map((el, key) => (
                <tr key={key}>
                  {this.props.Allusers.map((user) =>
                    el.userId === user._id ? (
                      <div>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                      </div>
                    ) : (
                      <div></div>
                    )
                  )}

                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td> {el.quantity}</td>
                  <td>{el.size}</td>
                  <td>{el.etat}</td>
                  <td>{el.date}</td>
                  <td>Total :{el.quantity * el.price} </td>

                  <td>
                    <Button
                      className="Danger"
                      onClick={() => this.delete(el._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    Allusers: state.authReducer.AllUsers,
  };
};

export default connect(mapStateToProps, {
  listAllConfirmCart,
  removeFromCart,
  getAllUsers,
})(OrderAdmin);
