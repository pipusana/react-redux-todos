import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/reducers'

const loggerMiddleware = createLogger()


export function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware)
  )
}