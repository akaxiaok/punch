import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom'
import Store from './store/store';

import App from './app';

const store = new Store();

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

const  render = ()=>{
  ReactDOM.render(
    <AppContainer >
      <BrowserRouter >
        <App store={store} />
      </BrowserRouter >
    </AppContainer >,
    app);
}
render();
if (module.hot) {
  module.hot.accept('./app', function () {
    render();
  });
}