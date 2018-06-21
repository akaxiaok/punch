/**
 * Created by Kimi on 2018/6/21.
 */
import React from 'react';
import { Button, TextField } from '@material-ui/core';

class New extends React.Component {
  state = {
    showError: false,
    todoName: '',
    todoTimes: 0
  };
  create = () => {
    const todoName = this.state.todoName;
    const todoTimes = this.state.todoTimes;
    if (todoName && todoTimes) {
      this.props.store.addTodo(todoName, todoTimes);
      this.setState({ showError: false, todoName: '', todoTimes: 0 });
    } else {
      this.setState({ showError: true });
    }


  };

  render() {
    return (
      <div >
        <TextField
          required
          ref="todoName"
          id="todoName"
          label="Todo Name"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.todoName}
          error={this.state.showError}
          onChange={event => {
            this.setState({ todoName: event.target.value });
          }}
        />
        <TextField
          required
          id="todoTimes"
          ref="todoTimes"
          label="Number"
          type="number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.todoTimes}
          error={this.state.showError}
          onChange={event => {
            const value = event.target.value;
            if (value < 1) {
              this.setState({ todoTimes: 0 });
            } else if (value >= Number.MAX_SAFE_INTEGER) {
              this.setState({ todoTimes: Number.MAX_SAFE_INTEGER });
            } else {
              this.setState({ todoTimes: value });
            }
          }}
        />
        <Button onClick={this.create} >Create</Button >
        <span >{this.props.store.todosCount}</span >
      </div >

    )
  }
}


export default New;