/**
 * Created by Kimi on 2018/6/21.
 */
import React, { Component } from 'react';

import PunchButton from './PunchButton';
import ProgressBar from './ProgressBar';
import { withRouter } from 'react-router';

class Start extends Component {

  handleClick = () => {
    this.setState((prev, props) => {
      if (prev.current < prev.times) {
        const current = prev.current + 1;
        const value = _.round(current / prev.times * 100);
        return { current: current, value: value }
      }
    })
  };

  constructor(props) {
    super(props);
    const { todo } = props.match.params;
    const { times } = props.store.todos[todo];
    this.state = {
      times: times,
      current: 0,
      value: 0
    }
  }

  render() {
    const { times, value, current } = this.state;
    return (
      <div >
        <ProgressBar value={value} />
        {`${current}/${times}`}
        <PunchButton onClick={this.handleClick} />
      </div >
    )
  }
}


export default withRouter(Start);