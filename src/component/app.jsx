import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

import History from './History';
import New from './New';
import Start from './Start';
import Nav from './Nav';

import '../../node_modules/normalize.css/normalize.css';


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
      <div >
        <Grid container spacing={0} style={{ height: '100vh' }} {...style}>
          <Grid item xs={2} >
          </Grid >
          <Grid item xs={12}>
            <Switch >
              <Route exact path='/' render={this.childRender(New)} />
              <Route exact path='/new' render={this.childRender(New)} />
              <Route path='/start' render={this.childRender(Start)} />
              <Route path='/history' render={this.childRender(History)} />
            </Switch >
          </Grid >
          <Grid item xs={'auto'} >
            <Nav />
          </Grid >
        </Grid >
      </div >
    );
  }
}

export default App;