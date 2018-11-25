import React, { Component } from 'react';

export default class SuggestionBox extends Component {
  getSuggestions() {
    const { suggestions } = this.props;

    if (suggestions.length === 0) {
      return (
        <div className="border border-warning">
          <p className="text-center">-- No results found --</p>
        </div>
      );
    }
    return (
      <div className="list-group">
        {
          suggestions.map((suggestion, index) => {
            const {
              firstName,
              lastName,
              middleName,
              state,
            } = suggestion;

            return (
              <a href
                className="list-group-item list-group-item-action text-left">
                {`${firstName} ${middleName} ${lastName} - ${state}`}
              </a>
            );
          })
        }
      </div>
    );
  }

  render() {
    return this.getSuggestions();
  }
}
