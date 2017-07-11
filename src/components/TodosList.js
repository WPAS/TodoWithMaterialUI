import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

class TodosList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: []
    };
  }

  handleCheck(event) {
    const newId = Number(event.target.value);
    const toDelete = this.state.checked;
    if(toDelete.find((id) => newId === id)) {
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
    return(
      <section className="centered">
        <List>
          {this.props.todos.map(todo => (
            <ListItem
              key={todo.id}
              leftCheckbox={<Checkbox value={todo.id} onCheck={this.handleCheck.bind(this)}/>}
              primaryText={`${todo.important} ${todo.text}`}
              secondaryText={todo.deadline}
            />
          ))}
        </List>
        <FlatButton label="Remove checked tasks" secondary={true} onTouchTap={this.handleClick.bind(this)} />
      </section>
    )
  }
}

export default TodosList;
