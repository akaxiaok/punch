import React, { Component } from 'react';
import { computed, observable } from "mobx";
import { observer } from 'mobx-react';
import PunchButton from './PunchButton';
import ProgressBar from './ProgressBar';

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
    return (
      <div >
        <PunchButton onClick={this.handleClick} />
        <ProgressBar value={store.value} />
        <Tip current={store.current} />
      </div >
    );
  }
}

export default App;