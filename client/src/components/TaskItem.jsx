import React, { Component } from 'react';

class TaskItem extends Component {
  constructor (props) {
    super();
  }

  render () {
    const todo = this.props.todo;
    return (
      <li className="list-group-item">{todo}</li>
    );
  }
}

export default TaskItem;
