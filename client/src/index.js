import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import jwt from 'jsonwebtoken';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setUser } from './actions';
import rootReducer from './reducers';

const store = createStore(rootReducer);

if (localStorage.getItem('jwtToken')) {
  const token = localStorage.getItem('jwtToken');
  const user = jwt.decode(token);
  store.dispatch(setUser(user));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
