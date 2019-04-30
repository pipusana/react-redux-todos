import React, { Component } from "react";
import { updateList, changeName, clearName } from "../actions/todoslist";
import { connect } from "react-redux";

class Todoinput extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.deleteItemlist = this.deleteItemlist.bind(this);
  }

  handleClick() {
    let list = [...this.props.todoslist.list];
    let itemName = this.props.todoslist.itemName;
    const formattedItem = {
      name: itemName,
      mode: false
    };
    list.push(formattedItem);
    this.props.updateList(list);
    this.props.clearName();
    this.props.tools();
  }

  handleClick1() {
    this.props.tools();
  }

  changeHandleName(itemName) {
    this.props.changeName(itemName);
  }

  deleteItemlist() {
    let list = [...this.props.todoslist.list];
    list.pop();
    this.props.updateList(list);
  }

  render() {
    const disabled = this.props.todoslist.list.length > 0 ? false : true;
    console.log("--> this.props.toolslist", this.props.toolslist);
    console.log("--> this.props.todoslist", this.props.todoslist);

    return (
      <div>
        <input
          value={this.props.todoslist.itemName}
          onChange={e => this.changeHandleName(e.target.value)}
        />
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleClick1}>Add1</button>
        <button onClick={this.deleteItemlist} disabled={disabled}>
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoslist: state.todoslist,
    toolslist: state.toolslist
  };
};

const mapDispatchToProps = dispatch => ({
  updateList: list => {
    dispatch(updateList(list));
  },
  changeName: name => {
    dispatch(changeName(name));
  },
  clearName: () => {
    dispatch(clearName());
  },
  tools: () => {
    dispatch({ type: "CHANGE_NAME_TOOLS", name: "pipusana" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todoinput);
