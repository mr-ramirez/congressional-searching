import ActionTypes from './actionTypes';

const initialState = {
  loading: false,
};

function searchReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
    case ActionTypes.START_LOADING_ALL_MEMBERS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default searchReducer;
