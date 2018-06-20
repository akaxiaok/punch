import React, { Component } from 'react';
import { computed, observable } from "mobx";
import { observer } from 'mobx-react';
import 'normalize.css';
import Grid from '@material-ui/core/Grid';


import PunchButton from './PunchButton';
import ProgressBar from './ProgressBar';
import Nav from './Nav';

class Store {
  @observable current = 1;
  max = 37;

  @computed
  get value() {
    return this.current / this.max * 100;
  }
}

const store = new Store();
window.store = store;

@observer
class Tip extends Component {
  render() {
    return (<div >{this.props.current}</div > );
  }
}

@observer
class App extends Component {
  handleClick = () => {
    store.current += 1;
  };

  render() {
    const style = {
      direction: 'column',
      wrap: 'nowrap'
    };

    return (
      <div >
        <Grid container spacing={0} style={{ height: '100vh' }} {...style}>
          <Grid item xs={'auto'} >
          </Grid >
          <Grid item xs={12} >
            <PunchButton onClick={this.handleClick} />
            <ProgressBar value={store.value} />
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