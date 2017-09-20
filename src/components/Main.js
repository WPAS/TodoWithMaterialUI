import React, { Component } from 'react';
import TodosList from './TodosList';
import AddTodo from './AddTodo';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    let savedTodos = []
    //checking length >2 because data will be as string, so empty array is "[]"
    if (localStorage.todo && localStorage.todo.length > 2) {
      savedTodos = JSON.parse(localStorage.getItem('todo'));
    } else {
      savedTodos = [{id: 1, text: "Add first task using the form below", deadline: "And write when it should be finished", important: ""}]
    }
    this.setState({todos:savedTodos});
  }

  handleAdd(todo) {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: Date.now(),
            text: todo.text,
            deadline: todo.deadline,
            important: todo.important,
          }
        ]
      }
    });
  }

  handleDelete(array) {
    this.setState((prevState) => {
      let newState = prevState.todos;
      array.forEach(number => {
        newState = newState.filter(todo => {
          return todo.id !== number;
        });
      });

      return { todos: newState };
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todo', JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <main>
        <TodosList todos={this.state.todos} handleDelete={this.handleDelete.bind(this)} />
        <AddTodo handleAdd={this.handleAdd.bind(this)}/>
      </main>
    );
  }
}

export default Main;
