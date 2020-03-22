import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as appReducers from 'ducks';

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({ ...appReducers });

export const store = __DEV__
  ? createStore(reducers, composeWithDevTools(middleware))
  : createStore(reducers, middleware);
