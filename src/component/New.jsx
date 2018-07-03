/**
 * Created by Kimi on 2018/6/21.
 */
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class New extends React.Component {
  state = {
    nameError: false,
    timesError: false,
    todoName: '',
    todoTimes: 1,
    nameErrorMessage: '',
    timesErrorMessage: '',
  };
  create = () => {
    const todoName = this.state.todoName;
    const todoTimes = this.state.todoTimes;
    if (todoName && todoTimes) {
      if (this.props.store.addTodo(todoName, todoTimes)) {
        this.setState({ todoName: '', todoTimes: 1 });
      } else {
        this.setState({
          nameError: true,
          nameErrorMessage: 'This todo already exists.'
        });
      }
    } else {
      this.setState({ nameError: true});
    }
  };

  render() {
    const style = {
      direction: 'row',
      alignContent: 'flex-start',
      justify: 'center'
    };
    const { nameError, timesError, nameErrorMessage, timesErrorMessage, todoName, todoTimes } = this.state;
    const inputWidthMap = { xs: 12, sm: 10, md: 8, lg: 6, xl: 4 };
    return (
      <Grid container item spacing={0} style={{ height: '100%', margin: '0 auto' }} {...style} {...inputWidthMap}>
        <Grid item xs={12} >
          <TextField
            required
            ref="todoName"
            id="todoName"
            label="Todo Name"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={todoName}
            error={nameError}
            helperText={<b >{nameErrorMessage}</b >}
            style={{ width: '100%' }}
            onChange={event => {
              this.setState({ todoName: event.target.value, nameError: false, nameErrorMessage: '' });
            }}
          />
        </Grid >


        <Grid item xs={12} >
          <TextField
            required
            id="todoTimes"
            ref="todoTimes"
            label="Number"
            type="number"
            margin="normal"
            helperText={timesErrorMessage}
            InputLabelProps={{
              shrink: true,
            }}
            value={todoTimes}
            error={timesError}
            onChange={event => {
              const value = parseInt(event.target.value, 10);
              if (value < 1) {
                this.setState({ todoTimes: 1 });
              } else if (value >= Number.MAX_SAFE_INTEGER) {
                this.setState({ todoTimes: Number.MAX_SAFE_INTEGER });
              } else {
                this.setState({ todoTimes: value });
              }
            }}
            style={{ width: '100%' }}
          />
        </Grid >
        <Grid item >
          <Button onClick={this.create} color="primary" variant="raised" >Create</Button >
        </Grid >
      </Grid>
    )
  }
}


export default New;