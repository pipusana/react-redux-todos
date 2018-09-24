import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialstate = {
  result: 0,
} 

const reducer = (state = initialstate, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        result: state.result + action.payload
      }
    case 'SUBTRACT':
      return {
        ...state,
        result: state.result - action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root'));