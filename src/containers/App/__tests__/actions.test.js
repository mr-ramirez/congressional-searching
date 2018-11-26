import ActionTypes from '../actionTypes';
import HttpService from '../../../api/HttpService';

import {
  finishLoadingAllMembers,
  loadAllMembers,
  setMembers,
  startLoadingAllMembers,
} from '../actions';

jest.mock('../../../api/HttpService');

describe('App Actions', () => {
  afterEach(() => {
    HttpService.get.mockReset();
  });

  describe('WHEN starting to retrieve the list of members of the Congress', () => {
    const expectedObject = {
      type: ActionTypes.START_LOADING_ALL_MEMBERS,
    };

    it('THEN it should return an object with one property', () => {
      const result = startLoadingAllMembers();
      expect(result).toEqual(expectedObject);
    });
  });

  describe('WHEN finishing the retrieval of the list of members of the Congress', () => {
    const expectedObject = {
      type: ActionTypes.FINISH_LOADING_ALL_MEMBERS,
    };

    it('THEN it should return an object with one property', () => {
      const result = finishLoadingAllMembers();
      expect(result).toEqual(expectedObject);
    });
  });

  describe('WHEN storing the list of members of the Congress', () => {
    const fakeMembers = [
      {
        id: 55,
      },
    ];

    const expectedObject = {
      type: ActionTypes.SET_MEMBERS,
      members: fakeMembers,
    };

    it('THEN it should return an object with two properties', () => {
      const result = setMembers(fakeMembers);
      expect(result).toEqual(expectedObject);
    });
  });

  describe('WHEN requesting the list of members of the Congress', () => {
    describe('AND the response is successful', () => {
      const fakeResponse = {
        results: [{
          members: [{
            date_of_birth: 'dateOfBirth',
            facebook: 'facebook',
            fax: 'fax',
          }],
        }],
      };

      const fakeChamber = 'chamber';
      const fakeCongress = 110;
      const mockedDispatcher = jest.fn();
      const expectedUrl = `${fakeCongress}/${fakeChamber}/members.json`;

      beforeEach(() => {
        HttpService.get
          .mockImplementation(() => Promise.resolve(fakeResponse));
      });

      it('THEN it should call the right actions', () => {
        const action = loadAllMembers({
          chamber: fakeChamber,
          congress: fakeCongress,
        });

        action(mockedDispatcher)
          .then(() => {
            expect(HttpService.get).toHaveBeenCalledWith(expectedUrl);
            expect(mockedDispatcher).toHaveBeenCalledTimes(3);
          });
      });
    });

    describe('AND the response is rejected', () => {
      const fakeChamber = 'chamber';
      const fakeCongress = 110;
      const mockedDispatcher = jest.fn();
      const expectedUrl = `${fakeCongress}/${fakeChamber}/members.json`;

      beforeEach(() => {
        HttpService.get
          .mockImplementation(() => Promise.reject(false));
      });

      it('THEN it should call the right actions', () => {
        const action = loadAllMembers({
          chamber: fakeChamber,
          congress: fakeCongress,
        });

        action(mockedDispatcher)
          .catch(() => {
            expect(HttpService.get).toHaveBeenCalledWith(expectedUrl);
            expect(mockedDispatcher).toHaveBeenCalledTimes(2);
          });
      });
    });
  });
});

