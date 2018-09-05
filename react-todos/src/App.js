import React, { Component } from 'react';
import Todoitem from './component/Todoitem'
import Todolist from './component/Todolist'
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
      <Todoitem />
      <Todolist />
     </div>
    );
  }
}

export default App;
