import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">

          {
            this.props.results.map((item, index) => (
              <div className="card" key={`resultItem${index}`}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  pageNumber: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default SearchResults;
