import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('../../../Search/components/SearchForm', () => 'SearchForm');
jest.mock('../../../../components/Spinner', () => 'Spinner');

describe('App.js', () => {
  const div = document.createElement('div');

  const mockedStore = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
  };

  const mockedPropsSearch = {
    chamber: 'house',
    congress: 100,
  };

  const mockedPropsApp = {
    loading: true,
    members: [{
      id: 10,
    }],
  };

  describe('WHEN property <loading> is true and <members> is not empty', () => {
    it('THEN it should render with a spinner and the search component', () => {
      const component = renderer.create(
        <App
          app={mockedPropsApp}
          store={mockedStore}
          search={mockedPropsSearch} />,
      );
      const tree = component.toJSON();
      
      expect(tree).toMatchSnapshot();
      expect(tree.children[1].children[0].type).toEqual('spinner');
      expect(tree.children[1].children[1].type).toEqual('SearchForm');
    });
  });
});
