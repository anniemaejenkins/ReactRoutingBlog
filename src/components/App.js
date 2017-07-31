import React, { Component } from 'react';

import BaseLayout from './BaseLayout.js';

// styles
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hey</h1>
      <BaseLayout />
      </div>
    );
  }
}

export default App;
