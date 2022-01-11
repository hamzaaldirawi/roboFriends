import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import './index.css';
import 'tachyons';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});

const store = createStore(rootReducer, 
  applyMiddleware(thunkMiddleware, logger)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
