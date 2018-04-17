import React, { Component } from 'react';
import '../input.css';

class TaskInput extends Component {

  render () {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control"/>
            <button className="btn btn-sm btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskInput;
