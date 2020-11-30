import React, { Component } from "react";
import { connect } from "react-redux";
import { isAuthorized, getUser } from "../JS/Actions/actions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.id);
    this.props.isAuthorized();
  }
  render() {
    const { profile } = this.props;

    return !profile ? (
      <Redirect to="/login" />
    ) : (
      <div>
        <h1>Profile</h1>
        <Link to="/addproduct">Add Prodcut</Link>
        {this.props.listUser.map((el, key) => (
          <p>
            {el.name} <br />
            {el.email}
          </p>
        ))}
        <h6 className="UserName">
          {!profile ? (
            <div></div>
          ) : (
            <div>
              <i
                className="fa fa-user-circle-o userIcon"
                aria-hidden="true"
              ></i>
              {this.props.listUser.map((el, key) => (
                <p>{el.name}</p>
              ))}
            </div>
          )}
        </h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.authReducer.profile,
  id: state.authReducer.id,
  listUser: state.authReducer.listUser,
});

export default connect(mapStateToProps, { isAuthorized, getUser })(Profile);
