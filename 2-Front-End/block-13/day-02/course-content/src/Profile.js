import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    const { anyParameterName } = this.props.match.params;
    return (
      <div>
        <h1>My profile page. Testing Router with props: {this.props.name}.<br></br> Passing parameters through the URL: {anyParameterName}</h1> {/* In this way I`m receiving parameters through our URL */}
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default Profile;
