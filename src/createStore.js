import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'
import makeRootReducer from './reducer/index'


const middlewares = [
  thunk.withExtraArgument(getFirebase)
]
const store = createStore(
  makeRootReducer(),
  initialState,
  compose(
    applyMiddleware(...middlewares),
  )
);
