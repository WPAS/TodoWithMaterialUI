import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

class AddTodo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      deadline: '',
      important: '',
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
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

  handleCheck() {
    const status = this.state.important ? '' : '! ';
    this.setState({important: status});
  }

  handleSubmit() {
    this.props.handleAdd(this.state);
    this.setState({
      text: '',
      deadline: '',
      important: '',
    })
  }

  render() {
    const style = {
      'marginTop': '2rem'
    }

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
        <Checkbox label="This is important task" checked={this.state.important ? true : false} onCheck={this.handleCheck} />
        <RaisedButton style={style} label="Add new task" primary={true} onTouchTap={this.handleSubmit} />
      </form>
    )
  }
}

export default AddTodo;
