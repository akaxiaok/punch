/**
 * Created by Kimi on 2018/6/20.
 */
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import History from '@material-ui/icons/History';
import CreateIcon from '@material-ui/icons/Create';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom'

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
    const LinkToNew = props => <Link to="/new" {...props} />;
    const LinkToList = props => <Link to="/todoList" {...props} />;
    const LinkToHistory = props => <Link to="/history" {...props} />;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="New" icon={<CreateIcon />} component={LinkToNew} />
        <BottomNavigationAction label="Start" icon={<ThumbUpIcon />} component={LinkToList} />
        <BottomNavigationAction label="History" icon={<History />} component={LinkToHistory} />
      </BottomNavigation >
    )
      ;
  }
}

export default Nav;
