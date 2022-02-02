import React, { Component } from 'react';
import Navbar from './components/Navbar';
import FetchStudents from './components/FetchStudents';
import FetchPosts from './components/FetchPosts';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="container">
          <FetchStudents />
          <FetchPosts />
        </div>
      </>
    );
  }
}
