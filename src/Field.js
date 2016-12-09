import React, { Component } from 'react';

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
  render() {
    const { field, userId } = this.props;
    const defaultField = (
      <a className="profile-link" href={ `/u/${userId}` }>
        { displayMapping[field] }
      </a>
    );

    if (field === 'level_of_education') {
      return <Dropdown defaultOption="Education completed" options={ {
        p: 'Doctorate',
        m: 'Master’s or professional degree',
        b: 'Bachelor’s degree',
        a: 'Associate’s degree',
        hs: 'Secondary/high school',
        jhs: 'Junior secondary/junior high/middle school',
        el: 'Elementary/primary school',
        none: 'None',
        o: 'Other'
      } }/>;
    } else {
      return defaultField;
    }
  }
}


