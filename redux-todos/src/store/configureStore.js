import { createStore } from 'redux'
import rootReducer from '../reducers/reducers'

export default () => {
  const store = createStore(rootReducer)
  return store
}