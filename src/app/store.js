import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect } from 'react-redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as appReducers from 'ducks';
import * as api from 'services/api';

import RootNavigator from 'navigators/RootNavigator';

const navReducer = createNavigationReducer(RootNavigator);

const middleware = applyMiddleware(
  thunk.withExtraArgument(api),
  createReactNavigationReduxMiddleware(
    state => state.nav,
  ),
);

const App = createReduxContainer(RootNavigator);
const mapStateToProps = state => ({
  state: state.nav,
});

const reducers = combineReducers({
  ...appReducers,
  nav: navReducer,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);
export const store = __DEV__
  ? createStore(reducers, composeWithDevTools(middleware))
  : createStore(reducers, middleware);
