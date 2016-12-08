import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export const render = (domId, userId) => {
  ReactDOM.render(
    <App user={ userId } />,
    document.getElementById(domId)
  );
}

export default class ProgressiveProfile {
  constructor(domId, userId) {
    render(domId, userId)
  }
}


