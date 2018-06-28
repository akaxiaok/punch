import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <BrowserRouter >
        <Grid container spacing={0} style={{ height: '100vh' }} {...style}>
          <Grid item xs={2} >
          </Grid >
          <Grid item xs={12} >
              <Switch >
                <Route path="/" exact render={this.childRender(New)} />
                <Route path="/new" render={this.childRender(New)} />
                <Route path="/todoList" exact component={this.childRender(TodoList)} />
                <Route path="/todoList/:todo" component={this.childRender(Start)} />
                <Route path="/history" render={this.childRender(History)} />
              </Switch >
          </Grid >
          <Grid item xs={'auto'} >
            <Nav />
          </Grid >
        </Grid >
        </BrowserRouter >
      </React.Fragment >
    );
  }
}

export default App;