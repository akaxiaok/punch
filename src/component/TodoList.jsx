/**
 * Created by Kimi on 2018/6/28.
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

import perf from "react-perftool-extension";
import ListItem from "./ListItem";

@perf
class TodoList extends Component {
  state = {
    anchorEl: null,
  };
  handleClick = (event, id) => {
    this.setState({
      anchorEl: event.currentTarget,
      id: id,
    })
  };
  handleClose = () => {
    this.setState({
      anchorEl: null,
      id: null,
    })
  };

  deleteTodo = (event) => {
    this.props.store.deleteTodo(this.state.id);
    // this.props.store.addRandom();
    this.handleClose();
  };
  addRandom = () => {
    this.props.store.addRandom();
    this.handleClose();
  };

  render() {
    const url = this.props.match.url;
    const action = this.props.action;

    const todos = this.props.todos || this.props.store.todos;
    const lists = [];
    const { anchorEl } = this.state;
    _.each(todos, (todo, id) => {
      const props = { id, url, action };
      lists.push(
        <ListItem key={id} {...props} onClick={this.handleClick} />
      )
    });
    return (
      <Scrollbars
        // This will activate auto hide
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200} >
        <List component="nav" >
          {lists}
        </List >

        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          <MenuItem key={1} onClick={this.deleteTodo} >
            delete
          </MenuItem >
          <MenuItem key={2} onClick={this.addRandom} >
            modify
          </MenuItem >
        </Menu >
      </Scrollbars >
    )
  }
}

TodoList.propTypes = {};

export default TodoList;