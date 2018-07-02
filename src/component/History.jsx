/**
 * Created by Kimi on 2018/6/21.
 */
import React, { Component } from 'react';

class History extends Component {
  render() {
    const { todo } = this.props.match.params;
    const { history } = this.props.store.todos[todo];
    return (
      <span >{JSON.stringify(history)}</span >
    )
  }
}


export default History;