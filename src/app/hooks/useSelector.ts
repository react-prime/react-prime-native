import * as i from 'types';
import { useSelector as reactReduxUseSelector, TypedUseSelectorHook } from 'react-redux';

export const useSelector: TypedUseSelectorHook<i.ReduxState> = reactReduxUseSelector;
