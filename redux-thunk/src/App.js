import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchGithub from './action/fetchgithub';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <div className="App">
        <h1> {this.props.store.profile.name} </h1>
        <img  src={this.props.store.profile.image} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  const urlGithub = 'https://api.github.com/users/pipusana';
  return {
    fetchProfile: () => dispatch(fetchGithub(urlGithub))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);