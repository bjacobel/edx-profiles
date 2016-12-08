import React, { Component } from 'react';

import './Toggle.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  onChange() {
    this.setState({value: !this.state.value});
  }

  toggleClick() {
    console.log('toggleClick');
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('onSubmit');
  }

  render() {
    const checked = (this.state && this.state.value) ? 'checked' : '';
    return (
      <div className={`toggle ${checked}`}>
        <label htmlFor={this.props.name} className="toggle-switch">
          {this.props.name}
        </label>
        <input type="checkbox"
               checked={checked}
               aria-checked={checked}
               onChange={this.onChange.bind(this)}
               name={this.props.name}
               id={this.props.name}
        />
      </div>
    );
  }
}

Toggle.defaultProps = {
  onChange: () => {},
  value: false,
  optionNames: {
    true: 'on',
    false: 'off'
  }
};

Toggle.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  optionNames: React.PropTypes.object
};

export default Toggle;
