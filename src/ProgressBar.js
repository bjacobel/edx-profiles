import React, { Component } from 'react';

import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    const percentComplete = this.props.percentage * 100 + '%',
          percentIncomplete = 100 - (this.props.percentage * 100) + '%';
    return (
      <div className="progress-bar">
        <span className="sr">{percentComplete} complete</span>
        <span className="progress-complete" style={{width: percentComplete}}></span>
        <span className="progress-incomplete" style={{width: percentIncomplete}}></span>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  percentage: React.PropTypes.number
};

export default ProgressBar;
