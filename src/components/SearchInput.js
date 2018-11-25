import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  textChanged = (event) => {
    const {
      target: { value },
    } = event;

    this.props.onChange({ value });
  }
  
  render() {
    return (
      <div className="input-group">
        <input
          id="searchInput_Input"
          type={this.props.type}
          className="form-control"
          aria-describedby="input"
          placeholder={this.props.placeholder}
          onChange={this.textChanged}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur} />

        <div className="input-group-append">
          <button
            className="btn btn-info"
            type="button"
            id="searchInput_Button">
            Search
          </button>
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default SearchInput;
