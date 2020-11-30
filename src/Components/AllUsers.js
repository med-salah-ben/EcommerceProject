import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers, deleteUser } from "../JS/Actions/actions";
import { Button } from "reactstrap";

class AllUsers extends Component {
  componentDidMount = () => {
    this.props.getAllUsers();
  };

  removeUser = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    const AllUsers = this.props.AllUsers;

    return (
      <div className="content content-margined">
        <div className="order-header">
          <h2 style={{ marginTop: "70px" }} className="productDes">
            All Users List
          </h2>
          <h3 style={{ marginTop: "30px" }} className="productDescription">
            Found Users Details By ID
          </h3>
        </div>
        <div className="order-list">
          <table className="table">
            <thead>
              <tr>
                <th>UserID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>City</th>
                <th>Adresse</th>
                <th>Postal Code</th>
                <th>Role</th>
                <th>Delete User</th>
              </tr>
            </thead>

            <tbody>
              {AllUsers.map((el, key) => (
                <tr key={key}>
                  <td>{el._id}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                  <td>{el.country}</td>
                  <td>{el.city}</td>
                  <td>{el.adresse}</td>

                  <td>{el.postalCode}</td>
                  <td>{el.role}</td>
                  <td>
                    <Button
                      className="danger"
                      onClick={() => this.removeUser(el._id)}
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
    AllUsers: state.authReducer.AllUsers,
  };
};

export default connect(mapStateToProps, { getAllUsers, deleteUser })(AllUsers);
