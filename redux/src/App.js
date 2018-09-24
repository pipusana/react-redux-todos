import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

const initialState = {
  result: 0,
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        result: state.result + action.value,
      }
    case 'SUB':
      return {
        ...state,
        result: state.result - action.value,
      }
    default:
      return state
  }
}

const store = createStore(reducer);

class App extends Component {
  handleClickAdd() {
    const action = {
      type: 'ADD',
      value: 500,
    }

    console.log('Add action', action);
    store.dispatch(action)
  }

  handleClickSub() {
    const action = {
      type: 'SUB',
      value: 500,
    }

    console.log('SUB action', action);
    store.dispatch(action)
  }

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="App">
       <h1> { store.getState().result } </h1>
       <button onClick={ this.handleClickAdd } > +500 </button>
       <button onClick={ this.handleClickSub } > -500 </button>
      </div>
    );
  }
}

export default App;