import React, { Component } from 'react';
import { loadPages } from './action/todos'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div />
    )
  }
}

const mapStateToProps = (state) => ({
  todoslist: 'aaaaaaa'
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    dispatch(loadPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
