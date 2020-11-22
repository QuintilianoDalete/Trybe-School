import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <h1>My homepage</h1>
      </div>
    )
  }
}

export default Home;
