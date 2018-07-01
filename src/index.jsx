import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Store from './store/store';

import App from './component/app';

const store = new Store();

window.store = store;

window.addTodos = function () {
  for (var i = 0; i < 20; i++) {
    store.addTodo(`test todo ${i}`, _.random(1, 100));
  }
};

window.clearTodos = function () {
  _.each(store.todos, (v, k) => {
    store.removeTodo(k);
  });
};

const app = document.querySelector('#app');

const render = () => {
  ReactDOM.render(
    <AppContainer >
      <App store={store} />
    </AppContainer >,
    app);
}
render();
if (module.hot) {
  module.hot.accept('./component/app', function () {
    render();
  });
}