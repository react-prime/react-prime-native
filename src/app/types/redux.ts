import { ThunkAction as IThunkAction, ThunkDispatch as IThunkDispatch } from 'redux-thunk';
import * as i from 'types';

/** Shape of a Redux action. */
export type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

/** Thunk Dispatch action with pre-filled generics. */
export type ThunkDispatch = IThunkDispatch<i.ReduxState, any, i.Action>;

type ExtraArgument = i.AnyObject;
/** Thunk action type with pre-filled generics. */
export type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, i.ReduxState, ExtraArgument, i.Action>;

/**
 * Generator type for thunk actions.
 * Pass the function type as type argument and it will return an action for components and ducks.
 * */
export type BaseThunkAction<Fn extends (...args: any) => any> =
  (...args: Parameters<Fn>) => i.ThunkAction<ReturnType<Fn>>;

export type BaseErrorState = {
  message?: string;
};

export type BaseState<DataType> = BaseErrorState & {
  loading: boolean;
  data: DataType;
  error: BaseErrorState;
};
