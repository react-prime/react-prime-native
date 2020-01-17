import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as appReducers from 'ducks';
import RootNavigator from 'navigators/RootNavigator';

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({ ...appReducers });

export const AppContainer = createAppContainer(RootNavigator);

export const store = __DEV__
  ? createStore(reducers, composeWithDevTools(middleware))
  : createStore(reducers, middleware);
