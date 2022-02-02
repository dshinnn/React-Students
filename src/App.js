import React, { Component } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import FetchStudents from './components/FetchStudents';
import FetchPosts from './components/FetchPosts';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
      <Router>
          <Navbar/>
              <div className="container">
                  <Routes>
                    <Route path='/' element={ <FetchStudents/>} />
                    <Route path='Posts' element={ <FetchPosts/> } />
                  </Routes>
              </div>
          </Router>
      </>
    );
  }
}
