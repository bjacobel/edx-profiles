import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './Field.css';
import Dropdown from './fields/Dropdown';
import { updateAccount } from './redux/actions';

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

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccount: (userId, data) => dispatch(userId, updateAccount(data))
  };
}

class Field extends Component {
  componentWillMount() {
    this.setState({ active: false });
  }

  toggleFieldActive(field) {
    this.setState({ active: !this.state.active });
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
            className={ classNames('activate-field', { activated: this.state.active }) }
            onClick={ () => this.toggleFieldActive(field) }
          >
            { displayMapping[field] }
          </div>
          <div className={ classNames('dropdown-wrapper', { activated: this.state.active }) }>
            <Dropdown
              defaultOption={ displayMapping[field] }
              onChange={ (event) => {
                this.toggleFieldActive(field);
                this.props.updateAccount(userId, { [field]: event.target.value })
              } }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field);


