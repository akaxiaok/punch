import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import History from './History';
import New from './New';
import TodoList from './TodoList';
import Nav from './Nav';
import Start from './Start';


@observer
class App extends Component {

  childRender = (Component) => {
    return (props) => (
      <Component store={this.props.store} />
    )
  }

  render() {
    const style = {
      direction: 'column',
      wrap: 'nowrap'
    };

    return (
      <React.Fragment >
        <CssBaseline />
        {/* The rest of your application */}

        <Grid container spacing={0} style={{ height: '100vh' }} {...style}>
          <Grid item xs={2} >
          </Grid >
          <Grid item xs={12} >
            <Switch >
              <Route path="/" exact render={this.childRender(New)} />
              <Route path="/new" render={this.childRender(New)} />
              <Route path="/todoList" component={(props) => (
                <div >
                  <Route path={`${props.match.path}/:todo`} component={this.childRender(Start)} />
                  <Route path={props.match.path} exact component={this.childRender(TodoList)} />
                </div >
              )} />
              <Route path="/history" render={this.childRender(History)} />
            </Switch >
          </Grid >
          <Grid item xs={'auto'} >
            <Nav />
          </Grid >
        </Grid >
      </React.Fragment >
    );
  }
}

export default App;