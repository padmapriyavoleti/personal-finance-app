import React from 'react';
import ReactDOM from 'react-dom';
import Income from './Income';
import { Provider } from 'react-redux';
import store from '../../container/src/redux/store'; 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Income />
    </React.StrictMode>
  </Provider>,
  document.getElementById('income-root')
);
