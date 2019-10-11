import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as appReducers from 'ducks';
import api from 'services/api';

import RootNavigator from 'navigators/RootNavigator';

const middleware = applyMiddleware(thunk.withExtraArgument(api));

const reducers = combineReducers({
  ...appReducers,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return reducers(state, action);
};

export const AppContainer = createAppContainer(RootNavigator);

export const store = __DEV__
  ? createStore(rootReducer, composeWithDevTools(middleware))
  : createStore(rootReducer, middleware);
