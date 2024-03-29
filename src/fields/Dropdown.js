import React, { Component } from 'react';

import './Dropdown.css';

export default class Dropdown extends Component {
  render() {
    const { options, defaultOption, onChange } = this.props;

    return (
      <select className="dropdown" onChange={ (event) => {
        if (event.type === 'change') {
          onChange(event);
        }
      }}>
        <option disabled selected>{ defaultOption }</option>
        { Object.entries(options).map(([key, value]) => {
          return <option value={ key }>{ value }</option>;
        }) }
      </select>
    );
  }
};
