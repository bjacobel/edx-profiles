import React, { Component } from 'react';

import { getAccount } from './services/accounts';
import ProgressBar from './ProgressBar';
import User from './User';
import './App.css';

class App extends Component {
  componentWillMount() {
    const { user } = this.props;

    getAccount(user).then((data) => {
      this.setState({ data });
    });
  }

  render() {
    let data = {};
    let imageUrl = "";

    if (this.state) {
      data = this.state.data;
    }

    if (data.profile_image) {
      imageUrl = data.profile_image.image_url_full;
    }

    return (
      <div className="progressive-profile">
        <User
          photo={ imageUrl }
          username={ data.username }
          fullname={ data.name }
        />
        <ProgressBar percentage={ data.completion_percentage } />
      </div>
    );
  }
}

export default App;
