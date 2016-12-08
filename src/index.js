import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export default (DOMId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(DOMId)
  );
}
