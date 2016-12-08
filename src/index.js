import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export default class ProgressiveProfile {
  constructor(domId) {
    ReactDOM.render(
      <App />,
      document.getElementById(domId)
    );
  }
}
