import React, { Component } from 'react';

class TaskInput extends Component {
  // constructor () {
  //   super();
  // }

  render () {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskInput;
