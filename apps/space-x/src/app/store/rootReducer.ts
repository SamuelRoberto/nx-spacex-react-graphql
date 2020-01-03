import { commonReducer } from './common/common.reducer'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  common: commonReducer
})
export type RootState = ReturnType<typeof rootReducer>
