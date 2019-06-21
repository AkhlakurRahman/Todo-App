import React, { Component } from 'react';

import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import classes from './TodoList.module.css';

export default class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  updateTodo = (id, newTodo) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTodo };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  completedTodo = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        removeTodo={this.removeTodo}
        key={todo.id}
        task={todo.task}
        completedTodo={this.completedTodo}
        completed={todo.completed}
        todoId={todo.id}
        updateTodo={this.updateTodo}
      />
    ));
    return (
      <div className={classes.TodoList}>
        <h1>
          Todo List <span>A Simple React Todo App</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
