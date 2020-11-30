import React, { Component } from "react";
import {
  listCart,
  removeFromCart,
  confirmItem,
} from "../JS/Actions/actionCart";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class Cart extends Component {
  componentDidMount = () => {
    this.props.listCart(this.props.userId);
  };

  delete = (id) => {
    this.props.removeFromCart(id);
  };

  confirm = (id) => {
    this.props.confirmItem(id);
  };
  render() {
    console.log(this.props);
    const cartItems = this.props.ListCart;

    return (
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>Shopping Cart</h3>
              <div>Price</div>
            </li>

            {this.props.ListCart.map((el, key) => (
              <div>
                <li key={key}>
                  <div className="cart-image">
                    <img src={el.image} alt="product" />
                  </div>

                  <div className="cart-name">
                    <h4>{el.name}</h4>

                    <h4>
                      Qte :<span> {el.quantity}</span>
                    </h4>
                    <h4> Product Size : {el.size}</h4>

                    <div>
                      <h4>
                        One Product Price :<span>{el.price}</span>TND
                      </h4>
                      <h4 style={{ float: "right" }}>
                        Total : {el.quantity * el.price} TND
                      </h4>
                      <h2> {el.etat} </h2>
                      {console.log(el._id)}
                      <Button
                        className="danger"
                        type="submit"
                        onClick={() => this.delete(el._id)}
                      >
                        Delete item
                      </Button>
                      <Button
                        className="primary"
                        type="submit"
                        onClick={() => this.confirm(el._id)}
                      >
                        Confirm item
                      </Button>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="cart-action">
          <h3>
            <h1>SubTotal</h1>
            Tolal Qte : {cartItems.reduce((Q, P) => Q + P.quantity, 0)} Items
            <br /> Total Price : TND
            {cartItems.reduce((Q, P) => Q + P.price * P.quantity, 0)}
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.id,
    ListCart: state.cartReducer.ListCart,
  };
};

export default connect(mapStateToProps, {
  listCart,
  confirmItem,
  removeFromCart,
})(Cart);
