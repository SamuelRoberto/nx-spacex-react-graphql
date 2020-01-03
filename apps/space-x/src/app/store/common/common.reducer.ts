import {
  CommonState,
  CommonActionTypes,
  SET_LOADER,
  SET_ERROR
} from './common.types'
const initialState: CommonState = {
  isError: false,
  isLoading: false
}

export function commonReducer(
  state = initialState,
  action: CommonActionTypes
): CommonState {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        isError: action.payload
      }
    default:
      return state
  }
}
