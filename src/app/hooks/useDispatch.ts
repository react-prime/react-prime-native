import * as i from 'types';
import { useDispatch as useReduxDispatch } from 'react-redux';

export const useDispatch = (): i.ThunkDispatch => {
  return useReduxDispatch<i.ThunkDispatch>();
};
