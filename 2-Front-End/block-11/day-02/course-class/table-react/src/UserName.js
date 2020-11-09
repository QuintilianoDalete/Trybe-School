// This file will create a specific style in the user name

import React, { Component } from 'react';
import './UserName.css'
import PropTypes from 'prop-types';

class UserName extends Component {
  render() {
    const name = this.props.name; // Accessing the properties from the file Table.js line 24. The object props contains all properties.  We can't change this object - This object is used by the React to control the received React properties. So never perfor assignments to this
    return (<span className="name">{name}</span>);
  }
}

UserName.propTypes = { // The PropTypes it's a way to grant that our component it's being used just in the way that we want.
  name: PropTypes.string.isRequired // In this line I am saying that I expect to receive a prop and this prop it's a string. It's a good code climate practice to restrict the prop types which our components can receive. We have many prop types that we can receive(numbers, strings, arrays, objects, etc). As well we can define that this prop is required 'isRequired'. In this way is resgistred in the code the correct way to use this component. 
}

UserName.defaultProps = { // This code means that if any name be passed we got to have a default name to use.
  name: 'Stranger'
} 

export default UserName;
