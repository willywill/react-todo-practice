import React, { Component } from 'react';

class Header extends Component {
  // constructor () {
  //   super();
  // }

  getCurrentDate = () => {
    const d = new Date();
    return d.getUTCDay;
  }

  render () {
    return (
      <header>
        <h1 className="display-4">To-Do App</h1>
        {/* <div className="display-4">{this.getCurrentDate()}</div> */}
      </header>
    );
  }
}

export default Header;
