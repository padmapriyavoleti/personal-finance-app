import React from 'react';
import ReactDOM from 'react-dom';
import Investments from './Investments';
import { Provider } from 'react-redux';
import store from '../../container/src/redux/store'; 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Investments />
    </React.StrictMode>
  </Provider>,
  document.getElementById('investments-root')
);
