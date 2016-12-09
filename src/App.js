import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPreferences } from './services/preferences';
import ProgressBar from './ProgressBar';
import User from './User';
import Checklist from './Checklist';
import './App.css';
import { fetchAccount, updateAccount } from './redux/actions';

class App extends Component {
  componentWillMount() {
    const { user } = this.props;

    this.props.fetchAccount(user);

    getPreferences(user).then((data) => {
      this.setState({ preferenceData: data });
    });
  }

  render() {
    const { name, username, profile_image_optimal } = this.props.accountData,
          {completion_percentage, completion } = this.props.percentCompleted;

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
      fetchAccount: (accountId) => {
        // fire action to fetch account data
        dispatch(fetchAccount(accountId));
      },
      updateAccount: (accountId, data) => {
        // fire action to update account data
        dispatch(updateAccount(accountId, data));
      }
    };
  }
)(App);
