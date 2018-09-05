import React, { Component } from 'react';

export default class Todoinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { addItem } = this.props;
    addItem(this.state.item)
    this.setState({item: ''});
  }

  render() {
    return (
      <div>
        <input 
          value={ this.state.item }
          onChange={ (e) => this.setState({item: e.target.value}) }
        />
        <button 
          onClick={ this.handleClick }
        > 
          Add 
        </button>
      </div>
    );
  }
}