import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddTodo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      deadline: '',
    };
  }

  handleChange = (event) => {
    if (event.target.id === "text") {
      this.setState({
        text: event.target.value,
      });
    } else if (event.target.id === "deadline") {
      this.setState({
        deadline: event.target.value,
      });
    }
  };

  handleSubmit() {
    this.props.handleAdd(this.state);
    this.setState({
      text: '',
      deadline: '',
    })
  }

  render() {
    return(
      <form className="centered">
        <TextField
          id="text"
          value={this.state.text}
          onChange={this.handleChange}
          hintText="What do you have to do?"
          floatingLabelText="Thing to do"
          /><br />
        <TextField
          id="deadline"
          value={this.state.deadline}
          onChange={this.handleChange}
          hintText="When it should be finished?"
          floatingLabelText="Deadline"
          /><br />
        <FlatButton label="Add new task" primary={true} onTouchTap={this.handleSubmit.bind(this)} />
      </form>
    )
  }
}

export default AddTodo;