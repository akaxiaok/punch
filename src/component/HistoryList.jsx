/**
 * Created by Kimi on 2018/7/2.
 */
import React, { Component } from 'react';
import TodoList from './TodoList';

class HistoryList extends Component {
  render() {
    return (
      <TodoList {...this.props} action={true} />
    )
  }
}

HistoryList.propTypes = {};

export default HistoryList;