import React from 'react';
import ReactDOM from 'react-dom';
import Expenses from './Expenses';
import { Provider } from 'react-redux';
import store from '../../container/src/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Expenses />
    </React.StrictMode>
  </Provider>,
  document.getElementById('expenses-root')
);
