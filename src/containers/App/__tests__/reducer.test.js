import ActionTypes from '../actionTypes';
import appReducer from '../reducer';

describe('App Reducer.js', () => {
  const fakeInitialState = {
    loading: false,
    members: [],
  };

  describe('WHEN the action is unknown', () => {
    const fakeAction = {
      type: 'UNKNOWN',
    };
    it('THEN the initial state must be returned', () => {
      const state = appReducer(fakeInitialState, fakeAction);
      expect(state).toEqual(fakeInitialState);
    });
  });

  describe(`WHEN the action refers to the finishing of the loading 
    of all the members of the congress`, () => {
    const fakeAction = {
      type: ActionTypes.FINISH_LOADING_ALL_MEMBERS,
    };

    it('THEN the property for loading must be set off', () => {
      const state = appReducer(fakeInitialState, fakeAction);
      expect(state).toEqual(fakeInitialState);
    });
  });

  describe(`WHEN the action refers to the starting of the loading 
    of all the members of the congress`, () => {
    const fakeAction = {
      type: ActionTypes.START_LOADING_ALL_MEMBERS,
    };

    const expectedState = {
      ...fakeInitialState,
      loading: true,
    };

    it('THEN the property for loading must be set on', () => {
      const state = appReducer(fakeInitialState, fakeAction);
      expect(state).toEqual(expectedState);
    });
  });

  describe(`WHEN the action refers to the setting of all the members 
    of the congress`, () => {
    const fakeAction = {
      type: ActionTypes.SET_MEMBERS,
      members: [{
        id: 10,
      }],
    };

    const expectedState = {
      ...fakeInitialState,
      loading: true,
      members: fakeAction.members,
    };

    it('THEN the property for loading must be set on', () => {
      const state = appReducer(fakeInitialState, fakeAction);
      expect(state).toEqual(expectedState);
    });
  });
});
