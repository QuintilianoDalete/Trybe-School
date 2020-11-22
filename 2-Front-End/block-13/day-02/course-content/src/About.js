import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div>
        <span>My about page</span>
        <Link to="/">Home</Link>
      </div>  
    )
  }
}

export default About;
