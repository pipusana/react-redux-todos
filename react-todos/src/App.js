import React, { Component } from 'react';
import TodoInput from './component/Todoinput'
import Todolist from './component/Todolist'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let { listItems } = this.state;
    listItems.push(item)
    this.setState({ listItems })
  }

  render() {
    return (
     <div>
      <TodoInput addItem={this.addItem} />
      <Todolist listItems={this.state.listItems} />
     </div>
    );
  }
}

export default App;
