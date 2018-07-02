import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import New from './New';
import Nav from './Nav';
import Start from './Start';
import History from './History';
import StartList from './StartList';
import HistoryList from './HistoryList';

@observer
class App extends Component {

  childRender = (Component) => {
    return (props) => (
      <Component {...this.props} {...props}/>
    )
  };

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
                <Route path="/todoList" render={() => {
                  return (
                    <div style={{ height: '100%' }} >
                      <Route path="/todoList" exact component={this.childRender(StartList)} />
                      <Route path="/todoList/:todo" component={this.childRender(Start)} />
                    </div >
                  )
                }} />
                <Route path="/history" render={() => {
                  return (
                    <div style={{ height: '100%' }} >
                      <Route path="/history" exact component={this.childRender(HistoryList)} />
                      <Route path="/history/:todo" component={this.childRender(History)} />
                    </div >
                  )
                }} />
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