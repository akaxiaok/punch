/**
 * Created by Kimi on 2018/6/28.
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

class TodoList extends Component {
  render() {
    const url = this.props.match.url;

    const getLink = (link) => {
      return props => <Link to={`${url}/${link}`} {...props} />
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
      </Scrollbars >
    )
  }
}

TodoList.propTypes = {};

export default withRouter(TodoList);