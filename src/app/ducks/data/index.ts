/**
 * This is an example file from react-prime
 */
import { ActionType, action } from 'typesafe-actions';
import * as i from 'types';

export const dataActions = {
  load: () => action('data/GET'),
  success: (success: boolean) => action('data/GET_SUCCESS', success),
  failed: () => action('data/GET_FAILED'),
};

const initialState: i.DataState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof dataActions>) => {
  switch (action.type) {
    case 'data/GET':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'data/GET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case 'data/GET_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getData: i.GetData['thunk'] = () => (dispatch) => {
  dispatch(dataActions.load());

  setTimeout(() => {
    dispatch(dataActions.success(true));
  }, 2000);
};
