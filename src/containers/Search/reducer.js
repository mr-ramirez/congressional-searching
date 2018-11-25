// import ActionTypes from './actionTypes';
import Chambers from '../../data/static/chambers';

const initialState = {
  chamber: Chambers.HOUSE.name,
  congress: Chambers.HOUSE.minCongress,
};

function searchReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
    default:
      return state;
  }
};

export default searchReducer;
