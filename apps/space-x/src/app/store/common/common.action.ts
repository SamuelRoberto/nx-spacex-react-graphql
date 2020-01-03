import { SET_ERROR, SET_LOADER, CommonActionTypes } from './common.types';

export function setLoader(loader: boolean): CommonActionTypes {
  return {
    type: SET_LOADER,
    payload: loader
  };
}
export function setError(error: boolean): CommonActionTypes {
  return {
    type: SET_ERROR,
    payload: error
  };
}
