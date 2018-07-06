import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import New from './New';
import Nav from './Nav';
import Start from './Start';
import History from './History';
import StartList from './StartList';
import HistoryList from './HistoryList';
import TopBar from './TopBar';

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
      wrap: 'nowrap',
      alignItems: 'center'
    };

    return (
      <React.Fragment >
        <CssBaseline />
        {/* The rest of your application */}
        <BrowserRouter >
          <Grid container spacing={0} style={{ height: '100vh' }} {...style}>
            <Grid item xs='auto' style={{ width: '100%' }}>
              <TopBar />
            </Grid >
            <Grid item xs={12} style={{ width: '100%' }} >
              <Switch >
                <Route path="/" exact render={() => (
                  <Redirect to="/new" />
                )} />
                <Route path="/new" render={this.childRender(New)} />
                <Route path="/start" render={() => {
                  return (
                    <div style={{ height: '100%' }} >
                      <Route path="/start" exact component={this.childRender(StartList)} />
                      <Route path="/start/:todo" component={this.childRender(Start)} />
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
            <Grid item xs={'auto'} style={{ width: '100%' }} >
              <Nav />
            </Grid >
          </Grid >
        </BrowserRouter >
      </React.Fragment >
    );
  }
}

export default App;