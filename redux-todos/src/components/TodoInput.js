import React, { Component } from 'react';
import { updateList, changeName, clearName } from '../actions/todoslist';
import { connect } from 'react-redux'

class Todoinput extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.deleteItemlist = this.deleteItemlist.bind(this);
  }

  handleClick() {
    let list = [ ...this.props.todoslist.list ];
    let itemName = this.props.todoslist.itemName;
    const formattedItem = {
      name: itemName,
      mode: false,
    }
    list.push(formattedItem)
    this.props.updateList(list)
    this.props.clearName()
  }

  changeHandleName(itemName) {
    this.props.changeName(itemName);
  }

  deleteItemlist() {
    let list = [ ...this.props.todoslist.list ];
    list.pop()
    this.props.updateList(list)
  }

  render() {
    const disabled = this.props.todoslist.list.length > 0 ? false : true; 

    return (
      <div>
      <input 
        value={ this.props.todoslist.itemName }
        onChange={ (e) => this.changeHandleName(e.target.value) }
      />
      <button 
        onClick={ this.handleClick }
      > 
        Add 
      </button>
      <button 
        onClick={ this.deleteItemlist }
        disabled={ disabled }
      > 
        Delete 
      </button>
    </div>
    );
  }
}

const mapStateToProps = ((state) => {
  return {
    todoslist: state.todoslist
  }
});

const mapDispatchToProps = ((dispatch) => {
  return {
    updateList: ((list) => {
      dispatch(updateList(list))
    }),
    changeName: ((name) => {
      dispatch(changeName(name))
    }),
    clearName: (() => {
      dispatch(clearName())
    }),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todoinput)