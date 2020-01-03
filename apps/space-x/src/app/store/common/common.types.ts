export interface CommonState {
  isLoading: boolean;
  isError: boolean;
}

export const SET_LOADER = 'SET_LOADER';
export const SET_ERROR = 'SET_ERROR';

interface SetLoaderAction {
  type: typeof SET_LOADER;
  payload: boolean;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: boolean;
}

export type CommonActionTypes = SetLoaderAction | SetErrorAction
