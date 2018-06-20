/**
 * Created by Kimi on 2018/6/20.
 */
import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import History from '@material-ui/icons/History';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Nav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="New" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Start" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="History" icon={<History />} />

      </BottomNavigation>
    );
  }
}
export default Nav;
