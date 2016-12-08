import React, { Component, PropTypes } from 'react';

import './User.css';

export default class User extends Component {
  render() {
    const { photo, fullname, username } = this.props;

    return (
      <div>
        <img alt="Your profile" src={ photo } className="profile-photo" />
        <h3 className="fullname">{ fullname }</h3>
        <h4 className="username">{ username }</h4>
      </div>
    );
  }
}

User.propTypes = {
	photo: PropTypes.string,
  fullname: PropTypes.string,
  username: PropTypes.string
};
