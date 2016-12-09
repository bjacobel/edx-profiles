import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAccount } from './services/accounts';
import { getPreferences } from './services/preferences';
import ProgressBar from './ProgressBar';
import User from './User';
import Checklist from './Checklist';
import './App.css';
import { fetchAccount, updateAccount } from './redux/actions';

class App extends Component {
  componentWillMount() {
    const { user } = this.props;

    this.setState({
      accountData: {},
      preferenceData: {}
    });

    getAccount(user).then((data) => {
      this.setState({ accountData: data });
    });

    getPreferences(user).then((data) => {
      this.setState({ preferenceData: data });
    });
  }

  render() {
    const { name, username, completion_percentage, profile_image_optimal, completion } = this.state.accountData;

    return (
      <div className="progressive-profile">
        <User
          photo={ profile_image_optimal }
          username={ username }
          fullname={ name }
        />
        <ProgressBar percentage={ completion_percentage } />
        <Checklist completion={ completion } userId={ username } />
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => {
    return {
      fetchAccount: (user) => {
        // fire action to fetch account data
        dispatch(fetchAccount(user));
      },
      updateAccount: (user, data) => {
        // fire action to update account data
        dispatch(updateAccount(user, data));
      }
    };
  }
)(App);
