import React, { Component } from "react";
import { connect } from "react-redux";
import { isAuthorized, getUser } from "../JS/Actions/actions";
import { Link } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import "../../src/assets/css/paper-kit.css";
import "../../src/assets/css/bootstrap.min.css";

class Header extends Component {
  state = {
    local: "",
    session: "",
  };

  componentDidMount() {
    this.props.getUser(this.props.id);
    this.props.isAuthorized();
  }
  handelLogout = () => {
    this.setState({
      local: localStorage.removeItem("token"),
      session: sessionStorage.removeItem("role"),
    });
  };

  render() {
    const { profile } = this.props;
    console.log(profile);
    console.log(this.props.role);

    return (
      <div>
        <header className="header">
          <div className="brand">
            <div>
              <div className="navigation-example">
                <Navbar className="fixed-top  navbar navbar-expand-lg navbar">
                  <NavbarBrand className="navbar-brand">
                    <Link to="/home">
                      <h2 style={{ color: "#66615B" }}> Ecommerce</h2>
                    </Link>
                  </NavbarBrand>
                  <h6 className="UserName">
                    {this.props.role === false ? (
                      <div></div>
                    ) : (
                      <div>
                        {this.props.listUser.map((el, key) => (
                        
                            <i
                              className="fa fa-user-circle-o userIcon"
                              aria-hidden="true"
                            >{el.name}</i>
                           
                       
                        ))}
                      </div>
                    )}
                  </h6>

                  <div className="container">
                    <button
                      className="navbar-toggler navbar-toggler-right"
                      id="navbar-transparent"
                      type="button"
                    ></button>
                    <UncontrolledCollapse navbar toggler="#navbar-transparent">
                      <Nav className="ml-auto" navbar>
                        <NavItem className="homeIcon">
                          <Link to="/home">
                            <NavLink
                              color="#424242"
                              style={{ fontSize: "15px" }}
                            >
                              <i
                                color="#424242"
                                className="fa fa-home"
                                aria-hidden="true"
                              ></i>
                              Home
                            </NavLink>
                          </Link>
                        </NavItem>
                        <Link to="/OurProduct">
                          <NavItem>
                            <NavLink style={{ fontSize: "15px" }}>
                              <i
                                color="#424242"
                                className="fa fa-product-hunt"
                                aria-hidden="true"
                              ></i>
                              Products
                            </NavLink>
                          </NavItem>
                        </Link>
                        {profile.role === "User" ? (
                          <NavItem>
                            <Link to="/confirmProduct">
                              <NavLink style={{ fontSize: "15px" }}>
                                <span color="#424242">Confirm Products</span>
                              </NavLink>
                            </Link>
                          </NavItem>
                        ) : (
                          <div></div>
                        )}

                        <hr className="headerHr" />
                        {profile.role === "Admin" ? (
                          <div></div>
                        ) : (
                          <Link to="/cart">
                            <NavItem>
                              <NavLink to="/cart">
                                <i
                                  color="#424242"
                                  className="fa fa-shopping-cart"
                                  aria-hidden="true"
                                  style={{ width: "30px", fontSize: "25px" }}
                                ></i>
                              </NavLink>
                            </NavItem>
                          </Link>
                        )}

                        {profile.name ? (
                          <Link to="/home">
                            <NavItem>
                              <NavLink onClick={this.handelLogout}>
                                <a href="/login">
                                  <i
                                    color="#424242"
                                    className="fa fa-power-off"
                                    aria-hidden="true"
                                    style={{ fontSize: "25px", color: "green" }}
                                  ></i>
                                </a>
                              </NavLink>
                            </NavItem>
                          </Link>
                        ) : (
                          <Link to="/login">
                            <NavItem>
                              <NavLink>
                                <i
                                  color="#424242"
                                  className="fa fa-power-off"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: "25px",
                                    textDecorationColor: "none",
                                    color: "red",
                                  }}
                                ></i>
                              </NavLink>
                            </NavItem>
                          </Link>
                        )}

                        <div>
                          {profile.role === "Admin" ? (
                            <UncontrolledDropdown nav>
                              <DropdownToggle
                                aria-haspopup={true}
                                caret
                                color="default"
                                data-toggle="dropdown"
                                href="#pablo"
                                id="navbarDropdownMenuLink"
                                nav
                                onClick={(e) => e.preventDefault()}
                              >
                                Admin
                              </DropdownToggle>
                              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                <DropdownItem
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <Link to="/adminOrders">Orders</Link>
                                </DropdownItem>
                                <DropdownItem
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <Link to="/addproduct">Add Products</Link>
                                </DropdownItem>
                                <DropdownItem
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <Link to="/addadmin">Add admin</Link>
                                </DropdownItem>
                                <DropdownItem
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <Link to="/allusers">Users List</Link>
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </Nav>
                    </UncontrolledCollapse>
                  </div>
                </Navbar>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.authReducer.role,
    isLoading: state.authReducer.isLoading,
    profile: state.authReducer.profile,
    id: state.authReducer.id,
    listUser: state.authReducer.listUser,
  };
};

export default connect(mapStateToProps, { isAuthorized, getUser })(Header);
