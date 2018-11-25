import React, { Component } from 'react';

import './styles/Spinner.css';

class Spinner extends Component {
  render() {
    return (
      <div className="animationload">
        <div className="osahanloading" />
      </div>
    );
  }
}

export default Spinner;
