import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/SuggestionBox.css';

class SuggestionBox extends Component {
  getSuggestions() {
    const { suggestions } = this.props;

    if (suggestions.length === 0) {
      return (
        <div className="row border bg-light suggestions mx-3">
          <div className="col-lg-12">
            <p className="text-center m-0 p-3">-- No results found --</p>
          </div>
        </div>
      );
    } else if (suggestions.length > 0) {
      return (
        <div className="list-group suggestions mx-3">
          {
            suggestions.map((suggestion, index) => {
              const {
                firstName,
                lastName,
                middleName,
                state,
              } = suggestion;

              return (
                <a onClick={() => this.handleSuggesstionSelected({ suggestion })}
                  className="list-group-item list-group-item-action text-left"
                  key={`suggestion${index}`}>
                  {`${firstName} ${middleName} ${lastName} - ${state}`}
                </a>
              );
            })
          }
        </div>
      );
    }
    return null;
  }

  handleSuggesstionSelected = ({ suggestion }) => {
    this.props.suggestionClicked({ suggestion });
  }

  render() {
    return (
      <div>
        { this.getSuggestions() }
      </div>
    );
  }
}

SuggestionBox.propTypes = {
  suggestionClicked: PropTypes.func.isRequired,
};

export default SuggestionBox;
