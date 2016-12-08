import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export const render = (domId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(domId)
  );
}

export default class ProgressiveProfile {
  constructor(domId) {
    render(domId)
  }
}


