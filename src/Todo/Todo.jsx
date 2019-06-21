import React, { Component } from 'react';
import classes from './Todo.module.css';

class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.task
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.todoId);
  };

  handleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateTodo(this.props.todoId, this.state.task);
    this.setState({ isEditing: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleToggle = () => {
    this.props.completedTodo(this.props.todoId);
  };

  render() {
    let todoEdit;
    if (this.state.isEditing) {
      todoEdit = (
        <div className={classes.Todo}>
          <form onSubmit={this.handleSubmit} className={classes.Todo_edit_form}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      todoEdit = (
        <div className={classes.Todo}>
          <li
            className={
              this.props.completed
                ? `${classes.Completed} ${classes.Todo_task}`
                : classes.Todo_task
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className={classes.Todo_buttons}>
            <button onClick={this.handleEdit}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return todoEdit;
  }
}

export default Todo;
