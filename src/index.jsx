import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Store from './store/store';

import App from './component/app';

const store = new Store();

window.store = store;
const app = document.querySelector('#app');

const  render = ()=>{
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