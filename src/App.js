import 'isomorphic-fetch';
import React, { Component } from 'react';
import fetch, { Headers } from 'node-fetch';
import logo from './logo.png';
import './App.css';
import SearchForm from './components/Search/SearchForm';
import Member from './models/member';

class App extends Component {
  constructor() {
    super();

    this.state = {
      members: [],
    };
  }

  UNSAFE_componentWillMount() {
    const session = 115; // 115th congressional session
    const chamber = 'senate'; // or 'house'

    fetch(`https://api.propublica.org/congress/v1/${session}/${chamber}/members.json`, {
      headers: new Headers({
        'X-API-Key': 'd0ywBucVrXRlMQhENZxRtL3O7NPgtou2mwnLARTr',
      }),
    })
      .then((res) => res.json())
      .then((json) => json.results[0].members)
      .then((members) => {
        this.setState({
          members: members.map(member => new Member(member)),
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Programming Exercise</h1>
        </header>
        <section className="container">
          {/*
            Your app should render this part of the page.
          */}
          <SearchForm results={this.state.members} />
        </section>
      </div>
    );
  }
}

export default App;
