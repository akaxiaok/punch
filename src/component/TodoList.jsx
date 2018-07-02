/**
 * Created by Kimi on 2018/6/28.
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

class TodoList extends Component {
  state = {
    anchorEl: null,
  };
  handleClick = (key) => {
    return (event) => {
      this.setState({
        anchorEl: event.currentTarget,
        key: key,
      })
    };
  };
  handleClose = () => {
    this.setState({
      anchorEl: null,
      key: null,
    })
  };

  deleteTodo = (event) => {
    this.props.store.deleteTodo(this.state.key);
    // this.props.store.addRandom();
    this.handleClose();
  };
  addRandom = ()=>{
    this.props.store.addRandom();
    this.handleClose();
  };

  render() {
    const url = this.props.match.url;

    const getLink = (link) => {
      return props => <Link to={`${url}/${link}`} {...props} />
    };
    const todos = this.props.todos || this.props.store.todos;
    const lists = [];
    const { anchorEl } = this.state;
    let actionMenu = (key) => (
      <ListItemSecondaryAction >
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick(key)}
        >
          <MoreVertIcon />
        </IconButton >
      </ListItemSecondaryAction >
    );
    _.each(todos, (todo, key) => {
      lists.push(
        <ListItem button component={getLink(key)} key={key} >
          <ListItemText primary={key} />
          {this.props.action ? actionMenu(key) : null}
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