import React, { Component } from 'react';

class AdminIndex extends Component {

  render() {
    return (
      <div className="ui horizontal statistics">
        <div className="statistic">
          <div className="value">
            2,204
          </div>
          <div className="label">
            Views
          </div>
        </div>
        <div className="statistic">
          <div className="value">
            3,322
          </div>
          <div className="label">
            Downloads
          </div>
        </div>
        <div className="statistic">
          <div className="value">
            22
          </div>
          <div className="label">
            Tasks
          </div>
        </div>
      </div>
    );
  }
}

export default AdminIndex;
