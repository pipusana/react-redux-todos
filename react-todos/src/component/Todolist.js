import React, { Component } from 'react';

export default class Todolist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.listItems.map((itme, index) => {
            return (
              <li key={index}> {itme} </li>
            )
          })}
        </ul>
      </div>
    );
  }
}