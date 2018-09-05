import React, { Component } from 'react';

export default class Todolist extends Component {
  constructor(props) {
    super(props);

    this.handleChangemode = this.handleChangemode.bind(this);
  }

  handleChangemode(index, mode) {
    let { listItems } = this.props;
    listItems[index].mode = !mode;
    this.props.changeModeitem(listItems);
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.listItems.map((itme, index) => {
            const textStyle = (itme.mode) ? { textDecoration: 'line-through' } : {}
            return (
              <div key={index}>
                <li> 
                   <input type='checkbox' onClick={e => this.handleChangemode(index, itme.mode)} />
                  <label style={ textStyle }> {itme.value} </label>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}