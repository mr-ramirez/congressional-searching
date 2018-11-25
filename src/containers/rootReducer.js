import { combineReducers } from 'redux';
import appReducer from './App/reducer';
import searchReducer from './Search/reducer';

export default combineReducers({
  app: appReducer,
  search: searchReducer,
});
