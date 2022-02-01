import React, { Component } from 'react';
import Fetch from './components/Fetch';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Fetch/>
      </>
    );
  }
}
