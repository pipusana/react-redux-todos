import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './App';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  )
}