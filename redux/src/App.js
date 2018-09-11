import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

const initialstate = {
  result: 0,
} 

const reducer = (state=initialstate, action) => {
  switch (action.type) {
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
      return state;
  };
};

const store = createStore(reducer); //initialstate

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClickAdd() {
    store.dispatch({
      type: "ADD",
      payload: 500,
    });
  }

  handleClickSubtract() {
    store.dispatch({
      type: "SUBTRACT",
      payload: 500,
    });
  }


  componentDidMount() {
    console.log('componentDidMount');
    store.subscribe(() => {
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    console.log('<<<< render store >>>>', store.getState())
    return (
      <div className="App">
        <h1> { store.getState().result } </h1>
        <button onClick={this.handleClickAdd} > + 500 </button>
        <button onClick={this.handleClickSubtract} > - 500 </button>
      </div>
    );
  }
}

export default App;
