import React, { Component } from 'react';

import { getAccount } from './services/accounts';
import './App.css';

class App extends Component {
  componentWillMount() {
    getAccount().then((data) => {
      this.setState({ data });
    });
  }

  render() {
    let data = {};

    if (this.state) {
      data = this.state.data;
    }

    return (
      <pre className="blue">{ JSON.stringify(data, null, 2) }</pre>
    );
  }
}

export default App;
