import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// import { createStore } from 'redux';

// const initialstate = {
//   result: 15000,
// } 

// const reducer = (state=initialstate, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return {
//         ...state,
//         result: state.result + action.payload
//       }
//       break;
//     case 'SUBTRACT':
//       return {
//         ...state,
//         result: state.result - action.payload
//       }
//       break;
//     default:
//       return state;
//       break;
//   };
// };

// const store = createStore(reducer); //initialstate

// store.subscribe(() => {
//   console.log('update store:', store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 15000,
// });

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 30000,
// });