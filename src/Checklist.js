import React, { Component}  from 'react';

import './Checklist.css';
import Field from './Field';

export default class Checklist extends Component {
  render() {
    const { completion, userId } = this.props;

    if (!completion) {
      // Don't display this component until we have data for it
      return null;
    }

    const totalFields = Object.values(completion).length;
    const completedFields = Object.values(completion).filter(x => x).length;
    const incompleteFields = totalFields - completedFields;

    if (completedFields === totalFields) {
      // everything has already been filled out, don't display this component
      return null;
    }

    let more;

    if (incompleteFields > 3) {
      const moreItemsLength = Object.values(completion).filter(x => !x).length - 3;
      more = (
        <p className="list-extended">
        ... and { moreItemsLength } more field{ moreItemsLength > 1 ? 's' : '' }
        </p>
      )
    }

    return (
      <div className="checklist">
        <p className="finish"><b>Finish your profile:</b></p>
        <ul>
          {
            Object.entries(completion)
              .filter(([key, value]) => !value)
              .slice(0, 3)
              .map(([key, value]) => {
                return (
                  <li className="completion-item" key={ key } userId={ userId }>
                    <Field field={key} />
                  </li>
                );
              })
          }
        </ul>
        { more }
      </div>
    )
  }
}
