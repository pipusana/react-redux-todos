import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const initialState = {
  profile: {
    image: '',
    name: '',
  },
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {
        ...state,
        profile: {
          ...action.data
        }
      }
    default:
      return state;
  }
}

const middlewares = [thunk, loggerMiddleware]
const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
