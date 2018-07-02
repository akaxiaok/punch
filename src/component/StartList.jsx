/**
 * Created by Kimi on 2018/7/2.
 */
import React, { Component } from 'react';
import TodoList from './TodoList';

class StartList extends Component {
  render() {
    const { store } = this.props;
    const todos = _.pickBy(store.todos, (todo) => {
      return todo.history[_.today()] !== todo.times;
    });
    return (
      <TodoList {...this.props} todos={todos} action={false} />
    )
  }
}

StartList.propTypes = {};

export default StartList;