/**
 * Created by Kimi on 2018/6/28.
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

class TodoList extends Component {
  render() {
    const getLink = (link) => {
      return props => <Link to={`/todoList/${link}`} {...props} />
    };
    const todos = this.props.store.todos;
    const lists = [];
    _.each(todos, (todo, key) => {
      lists.push(
        <ListItem button component={getLink(key)} key={key} >
          <ListItemText primary={key} />
        </ListItem >
      )
    });
    return (
      <List component="nav" >
        {lists}
      </List >
    )
  }
}

TodoList.propTypes = {};

export default TodoList;