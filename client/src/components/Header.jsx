import React, { Component } from 'react';
import '../header.css';

class Header extends Component {

  getCurrentDate = () => {
    const d = new Date();
    return d.getUTCDay;
  }

  render () {
    return (
      <div className="header-container">
        <header className="header">
          <h1 className="title">Todo App</h1>
        </header>
        <div className="subtitle-container">
          <h4 className="subtitle">Tasks</h4>
        </div>
      </div>
    );
  }
}

export default Header;
