import 'core-js/fn/object/keys';
import 'core-js/fn/object/values';
import 'core-js/fn/object/assign';
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


