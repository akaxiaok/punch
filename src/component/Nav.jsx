/**
 * Created by Kimi on 2018/6/20.
 */
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import History from '@material-ui/icons/History';
import CreateIcon from '@material-ui/icons/Create';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {

  handleChange = (event, value) => {
    this.setState({ value });
  };
  rout = {
    new: 0,
    start: 1,
    history: 2,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.rout[this.props.location.pathname.split('/')[1]] || 0
    };
  }

  render() {
    const { classes } = this.props;
    const LinkToNew = props => <Link to="/new" {...props} />;
    const LinkToList = props => <Link to="/start" {...props} />;
    const LinkToHistory = props => <Link to="/history" {...props} />;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        showLabels
        onChange={this.handleChange}
      >
        <BottomNavigationAction label="New" icon={<CreateIcon />} component={LinkToNew} />
        <BottomNavigationAction label="Start" icon={<ThumbUpIcon />} component={LinkToList} />
        <BottomNavigationAction label="History" icon={<History />} component={LinkToHistory} />
      </BottomNavigation >
    )
      ;
  }
}

export default withRouter(Nav);
