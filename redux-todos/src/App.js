import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoLists'

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

export default App;