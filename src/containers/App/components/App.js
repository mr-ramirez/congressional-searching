import { connect } from 'react-redux';
import React, { Component } from 'react';

import '../App.css';
import { loadAllMembers } from '../actions';
import Header from '../../../components/Header';
import SearchForm from '../../Search/components/SearchForm';
import spinner from '../../../components/Spinner';

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
      return (<spinner />);
    }
    return null;
  }
  

  render() {
    return (
      <div className="App">
        <Header />

        <section className="container">
          { this.getLoadingSpinner() }
          {
            this.props.app.members.length > 0 ?
              <SearchForm results={this.state.members} />
            :
              null
          }
        </section>
      </div>
    );
  }
}

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
