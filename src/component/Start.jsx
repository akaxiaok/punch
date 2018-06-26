/**
 * Created by Kimi on 2018/6/21.
 */
import React, { Component } from 'react';

import PunchButton from './PunchButton';
import ProgressBar from './ProgressBar';

class Start extends Component {
  handleClick = () => {
  };

  render() {
    return (
      <div >
        <PunchButton onClick={this.handleClick} />
        <ProgressBar />
      </div >
    )
  }
}


export default Start;