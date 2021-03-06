import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

class TodosList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: []
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleCheck(event) {
    const newId = Number(event.target.value);
    const toDelete = this.state.checked;

    const isChecked = toDelete.find(id => newId === id);
    
    if(isChecked) {
      const newState = toDelete.filter((id) => id !== newId);
      this.setState({
        checked: newState,
      });
    } else {
      this.setState({
        checked: [...toDelete, newId]
      });
    }    
  }

  handleClick() {
      this.props.handleDelete(this.state.checked);
  }

  render() {
    const primary = (todo) => (
      <div>
        <span className="importantTask">{todo.important}</span>
        <span>{todo.text}</span>
      </div>
    )

    return(
      <section className="centered">
        <List>
          {this.props.todos.map(todo => (
            <ListItem
              key={todo.id}
              leftCheckbox={<Checkbox value={todo.id} onCheck={this.handleCheck}/>}
              primaryText={primary(todo)}
              secondaryText={todo.deadline}
            />
          ))}
        </List>
        <RaisedButton label="Remove checked" primary={true} onTouchTap={this.handleClick} />
      </section>
    )
  }
}

export default TodosList;
