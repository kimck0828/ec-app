import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createStore from './reducks/store/store';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// ブラウザ情報
const history = createBrowserHistory();

// STORE実行
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
