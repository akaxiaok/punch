/**
 * Created by Kimi on 2018/6/20.
 */
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import History from '@material-ui/icons/History';
import CreateIcon from '@material-ui/icons/Create';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link, withRouter } from 'react-router-dom'

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
        <BottomNavigationAction label="New" icon={<CreateIcon /> } onClick={() => {
          this.props.history.push("/new");
        }}/>
        <BottomNavigationAction label="Start" icon={<ThumbUpIcon />} onClick={() => {
          this.props.history.push("/start");
        }}/>
        <BottomNavigationAction label="History" icon={<History />} onClick={() => {
          this.props.history.push("/history");
        }} />
      </BottomNavigation >
    )
      ;
  }
}

export default withRouter(Nav);
