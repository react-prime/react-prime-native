import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as appReducers from 'ducks';
import * as api from 'services/api';

import RootNavigator from 'navigators/RootNavigator';
const navigationReducer = createNavigationReducer(RootNavigator);

const middleware = applyMiddleware(
  thunk.withExtraArgument({ api, handleRewardResponse }),
  createReactNavigationReduxMiddleware('root', state => state.nav),
);

const App = reduxifyNavigator(RootNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

const reducers = combineReducers({
  ...appReducers,
  nav: navigationReducer,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);
export const store = __DEV__
  ? createStore(reducers, composeWithDevTools(middleware))
  : createStore(reducers, middleware);
