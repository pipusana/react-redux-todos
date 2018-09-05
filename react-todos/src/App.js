import React, { Component } from 'react';
import TodoInput from './component/Todoinput'
import Todolist from './component/Todolist'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     <div>
      <TodoInput />
      <Todolist />
     </div>
    );
  }
}

export default App;
