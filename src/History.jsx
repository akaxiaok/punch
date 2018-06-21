/**
 * Created by Kimi on 2018/6/21.
 */
import React, { Component } from 'react';

class History extends Component {
  render() {
    let str = JSON.stringify(this.props.store.todos);
    return (
      <span >{str}</span >
    )
  }
}


export default History;