import React, { Component } from 'react';

import { getAccount } from './services/accounts';
import { getPreferences } from './services/preferences';
import ProgressBar from './ProgressBar';
import User from './User';
import './App.css';

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
    const { name, username, completion_percentage, profile_image_optimal } = this.state.accountData;

    return (
      <div className="progressive-profile">
        <User
          photo={ profile_image_optimal }
          username={ username }
          fullname={ name }
        />
        <ProgressBar percentage={ completion_percentage } />
      </div>
    );
  }
}

export default App;
