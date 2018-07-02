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
      const { current: prevCurrent, times } = prev;
      if (prevCurrent < times) {
        const current = prevCurrent + 1;
        const value = _.getPercent(current, prev.times);
        this.props.store.doToday(props.match.params.todo, current);
        return { current: current, value: value }
      }
    })
  };

  constructor(props) {
    super(props);
    const { todo } = props.match.params;
    const { times, history } = props.store.todos[todo];
    const current = history[_.today()] || 0;
    const value = _.getPercent(current, times);
    this.state = {
      times,
      current,
      value
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