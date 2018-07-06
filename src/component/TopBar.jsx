/**
 * Created by Kimi on 2018/7/6.
 */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TopBar extends Component {

  handleClick = () => {
    this.props.history.goBack();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <AppBar position="static" >
          <Toolbar >
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" >
              <MenuIcon />
            </IconButton >
            <Typography variant="title" color="inherit" className={classes.flex} >
              Punch
            </Typography >
            <IconButton onClick={this.handleClick} className={classes.menuButton} color="inherit" aria-label="Menu" >
              <ArrowBack />
            </IconButton >
          </Toolbar >
        </AppBar >
      </div >
    );
  }
}

TopBar.propTypes = {};
export default withRouter(withStyles(styles)(TopBar));
