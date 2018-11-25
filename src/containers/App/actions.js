import ActionTypes from './actionTypes';
import HttpService from '../../api/HttpService';
import Member from '../../models/member';

export function startLoadingAllMembers() {
  return {
    type: ActionTypes.START_LOADING_ALL_MEMBERS,
  };
};

export function finishLoadingAllMembers() {
  return {
    type: ActionTypes.FINISH_LOADING_ALL_MEMBERS,
  };
};

export function setMembers(members) {
  return {
    type: ActionTypes.SET_MEMBERS,
    members
  };
};

export function loadAllMembers({ chamber, congress }) {
  return (dispatch) => {
    dispatch(startLoadingAllMembers());

    return HttpService.get(`${congress}/${chamber}/members.json`)
      .then((response) => {
        const { results } = response;
        const resultsMapped = results[0].members.map(item => new Member(item));

        dispatch(setMembers(resultsMapped));
        return dispatch(finishLoadingAllMembers());
      })
      .catch((error) => dispatch(finishLoadingAllMembers()));
  };
}
