import React, { Component } from 'react';
import classNames from 'classnames';

import './Field.css';
import Dropdown from './fields/Dropdown';

const displayMapping = {
  bio: 'About Me',
  name: 'Full Name',
  profile_image: 'Profile Photo',
  year_of_birth: 'Year of Birth',
  level_of_education: 'Education Completed',
  language_proficiencies: 'Preferred Language',
  gender: 'Gender',
  goals: 'Goals'
};

export default class Field extends Component {
  componentWillMount() {
    this.setState({ activeFields: {} });
  }

  toggleFieldActive(field) {
    this.setState({
      activeFields: Object.assign({}, this.state.activeFields, {
        [field]: !this.state.activeFields[field]
      })
    });
    console.log('toggling')
  }

  render() {
    const { field, userId } = this.props;
    const defaultField = (
      <a className="profile-link" href={ `/u/${userId}` }>
        { displayMapping[field] }
      </a>
    );

    if (field === 'level_of_education') {
      return (
        <div>
          <div
            className={ classNames('activate-field', { activated: this.state.activeFields[field] }) }
            onClick={ () => this.toggleFieldActive(field) }
          >
            { displayMapping[field] }
          </div>
          <div className={ classNames('dropdown-wrapper', { activated: this.state.activeFields[field] }) }>
            <Dropdown
              defaultOption={ displayMapping[field] }
              onChange={ () => this.toggleFieldActive(field) }
              options={ {
                p: 'Doctorate',
                m: 'Master’s or professional degree',
                b: 'Bachelor’s degree',
                a: 'Associate’s degree',
                hs: 'Secondary/high school',
                jhs: 'Junior secondary/junior high/middle school',
                el: 'Elementary/primary school',
                none: 'None',
                o: 'Other'
              } }
            />
          </div>
        </div>
      );
    } else {
      return defaultField;
    }
  }
}


