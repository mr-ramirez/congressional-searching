import ActionTypes from './actionTypes';

const initialState = {
  loading: false,
  members: [],
};

function appReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
    case ActionTypes.FINISH_LOADING_ALL_MEMBERS:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.SET_MEMBERS:
      return {
        ...state,
        loading: true,
        members: action.members,
      };
    case ActionTypes.START_LOADING_ALL_MEMBERS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default appReducer;
