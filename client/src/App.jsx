import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="display-1">Header 1</h1>
        <h2 className="display-2">Header 2</h2>
        <h3 className="display-3">Header 3</h3>
        <h4 className="display-4">Header 4</h4>
        <button className="btn btn-outline btn-primary">Submit</button>
      </div>
    );
  }
}

export default App;
