import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter   } from 'react-router-dom';

import Store from './store/store';

import App from './component/app';

const store = new Store();

const app = document.querySelector('#app');

const  render = ()=>{
  ReactDOM.render(
    <AppContainer >
      <BrowserRouter >
        <App store={store} history={history}/>
      </BrowserRouter >
    </AppContainer >,
    app);
}
render();
if (module.hot) {
  module.hot.accept('./component/app', function () {
    render();
  });
}