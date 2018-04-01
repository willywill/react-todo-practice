import React, { Component } from 'react';
import TaskItem from './TaskItem.jsx';
import TaskService from '../services/TaskService';

class TaskList extends Component {
  constructor() {
    super();

    this.state = { todos: [] };
  }

  /**
   * DOM rendered, let's fetch data now as to not block rendering.
   * 
   * @memberof TaskList
   */
  componentDidMount = async () => {
    try {
      const todos = await TaskService.getAllTodos();
      console.log(todos.data.response);
      this.setState({ todos: todos.data.response });
    } catch (exception) {
      console.log(exception);
    }
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          { 
            this.state.todos.map(todo => {
              return <TaskItem todo={todo.taskDesc} key={todo.taskID} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default TaskList;
