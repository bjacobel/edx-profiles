import React, { Component } from 'react';

import { getAccount } from './services/accounts';
import ProgressBar from './ProgressBar';
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

    if (this.state) {
      data = this.state.data;
    }

    return (
      <div>
        <ProgressBar percentage={ data.completion_percentage } />
        <pre className="blue">{ JSON.stringify(data, null, 2) }</pre>
      </div>
    );
  }
}

export default App;
