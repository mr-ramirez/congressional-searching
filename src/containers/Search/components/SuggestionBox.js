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
      <div className="border border-info">
        {
          suggestions.map((suggestion, index) => {
            const {
              firstName,
              lastName,
              middleName,
              state,
              title,
            } = suggestion;

            return (
              <div className="row py-3 px-2" key={index}>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <p>{`${title} ${firstName} ${middleName} ${lastName}`}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <p>{`${state}`}</p>
                    </div>
                  </div>
                </div>
              </div>
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
