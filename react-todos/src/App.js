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
    this.changeModeitem = this.changeModeitem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(item) {
    let { listItems } = this.state;
    const formattedItem = {
      value: item,
      mode: false,
    }
    listItems.push(formattedItem)
    this.setState({ listItems })
  }

  deleteItem() {
    let { listItems } = this.state;
    listItems.pop()
    this.setState({ listItems })
  }

  changeModeitem(listItems) {
    this.setState({ listItems });
  }

  render() {
    return (
     <div>
      <TodoInput listItems={this.state.listItems} addItem={this.addItem} deleteItem={this.deleteItem}/>
      <Todolist listItems={this.state.listItems} changeModeitem={this.changeModeitem}/>
     </div>
    );
  }
}

export default App;
