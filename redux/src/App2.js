import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> { this.props.store.result } </h1>
        <button onClick={() => this.props.add(500)}> +500 </button>
        <button onClick={() => this.props.subtract(500)}> -500 </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: value => dispatch({ type: 'ADD', payload: value}),
    subtract: value => dispatch({ type: 'SUBTRACT', payload: value})
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
