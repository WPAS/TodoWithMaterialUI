import React, { Component } from 'react';
import TodosList from './TodosList';
import AddTodo from './AddTodo';
import Header from './Header';

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
      savedTodos = [{id: 1, text: "Add first task using the form below", deadline: "", important: ""}]
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
      let newState = prevState.todos.filter((todo) => {
        return !array.includes(todo.id);
      })
      return { todos: newState };
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todo', JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <main>
        <Header />
        <TodosList todos={this.state.todos} handleDelete={this.handleDelete.bind(this)} />
        <AddTodo handleAdd={this.handleAdd.bind(this)}/>
      </main>
    );
  }
}

export default Main;
