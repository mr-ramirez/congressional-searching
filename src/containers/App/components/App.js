import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import { loadAllMembers } from '../actions';
import Header from '../../../components/Header';
import Search from '../../Search/components/Search';
import Spinner from '../../../components/Spinner';

class App extends Component {
  constructor() {
    super();

    this.state = {
      members: [],
    };
  }

  UNSAFE_componentWillMount() {
    const { chamber, congress } = this.props.search;

    this.props.loadAllMembers({ chamber, congress });
  }

  getLoadingSpinner = () => {
    const { loading } = this.props.app;

    if (loading) {
      return (<Spinner />);
    }
    return null;
  }
  

  render() {
    return (
      <div className="App">
        <Header />

        <section className="container">
          <div className="row mt-4 mb-2">
            <div className="col-lg-12 text-left">
              <h3 className="lead">Members of the Congress Search Engine</h3>
            </div>
          </div>

          { this.getLoadingSpinner() }
          {
            this.props.app.members.length > 0 ?
              <Search />
            :
              null
          }
        </section>
      </div>
    );
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllMembers: ({ chamber, congress }) =>
      dispatch(loadAllMembers({ chamber, congress })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
