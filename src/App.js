import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import HomeScreen from "./Components/HomeScreen";
import AddAdmin from "./Components/AddAdmin";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import OrderAdmin from "./Components/OrderAdmin";
import ConfirmProduct from "./Components/ConfirmProduct";
import AllUsers from "./Components/AllUsers";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <Header />

          <Route exact path="/allusers" render={() => <AllUsers />} />
          <Route exact path="/register" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Signin />} />
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/addproduct" render={() => <AddProduct />} />
          <Route exact path="/OurProduct" render={() => <HomeScreen />} />
          <Route exact path="/addadmin" render={() => <AddAdmin />} />
          <Route exact path="/cart" render={() => <Cart />} />
          <Route exact path="/adminOrders" render={() => <OrderAdmin />} />
          <Route
            exact
            path="/confirmProduct"
            render={() => <ConfirmProduct />}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
