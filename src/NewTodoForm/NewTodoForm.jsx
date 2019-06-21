import React, { Component } from 'react';
import uuid from 'uuid/v4';

import classes from './NewTodoForm.module.css';

export default class NewTodoForm extends Component {
  state = {
    task: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: '' });
  };

  render() {
    return (
      <div className={classes.NewTodoForm}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            placeholder="New Todo"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
