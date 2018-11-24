import {
  applyMiddleware,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './containers/rootReducer';

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
