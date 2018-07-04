/**
 * Created by Kimi on 2018/7/4.
 */
import React, { Component } from 'react';
import MuiListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Link } from 'react-router-dom';

class ListItem extends Component {
  handleClick = (id) => {
    return (event) => {
      this.props.onClick(event, id);
    };
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { url, id, action } = this.props;
    const LinkTo = props => <Link to={`${url}/${id}`} {...props}/>;
    const actionMenu = (
      <ListItemSecondaryAction >
        <IconButton
          aria-label="More"
          aria-owns={action ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick(id)}
        >
          <MoreVertIcon />
        </IconButton >
      </ListItemSecondaryAction >
    );

    return (
      <MuiListItem button component={LinkTo} >
        <ListItemText primary={id} />
        {action ? actionMenu : null}
      </MuiListItem >
    )
  }
}

ListItem.propTypes = {};

export default ListItem;