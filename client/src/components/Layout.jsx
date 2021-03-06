import React, { Component } from 'react';
import Header from './Header.jsx';
import TaskInput from './TaskInput.jsx';
import TaskList from './TaskList.jsx';
import Footer from './Footer.jsx';
import '../layout.css';

class Layout extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="card w-75 mx-auto my-5">
          <div className="card-body">
            <main className="main-content">
              <TaskInput />
              {/* <TaskList /> */}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
