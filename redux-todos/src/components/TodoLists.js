import React, { Component } from 'react';
import { updateList } from '../actions/todoslist';
import { connect } from 'react-redux'

class TodoLists extends Component {
  handleChangemode(index, mode) {
    let list = this.props.todoslist.list;
    list[index].mode = !mode;
    this.props.updateList(list);
  }

  render() {
    return (
      <div>
      <ul>
        { this.props.todoslist.list.map((itme, index) => {
          const textStyle = (itme.mode) ? { textDecoration: 'line-through' } : {}
          return (
            <div key={index}>
              <li> 
                 <input type='checkbox' onClick={e => this.handleChangemode(index, itme.mode)} />
                <label style={ textStyle }> {itme.name} </label>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoslist: state.todoslist
})

const mapDispatchToProps = (dispatch) => ({
  updateList: ((list) => {
    dispatch(updateList(list))
  }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLists)