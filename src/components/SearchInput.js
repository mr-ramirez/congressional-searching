import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onPressEnter();
  }
  
  textChanged = (event) => {
    const {
      target: { value },
    } = event;

    this.props.onChange({ value });
  }
  
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className="input-group">
          <input
            id="searchInput_Input"
            type={this.props.type}
            className="form-control"
            aria-describedby="input"
            placeholder={this.props.placeholder}
            onChange={this.textChanged}
            onFocus={this.props.onFocus}
            onKeyPress={this.handleKeyPress}
            onBlur={this.props.onBlur} />

          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="button"
              onClick={this.props.onClick}
              id="searchInput_Button">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SearchInput.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onPressEnter: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchInput;
