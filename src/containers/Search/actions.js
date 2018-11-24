import ActionTypes from './actionTypes';

export function startLoadingAllMembers() {
  return {
    type: ActionTypes.START_LOADING_ALL_MEMBERS,
  };
};

// export const finishLoadingAllMembersSuccessfully = () => ({
//   type: ActionTypes.LOADING_ALL_MEMBERS_STARTED,
// });
