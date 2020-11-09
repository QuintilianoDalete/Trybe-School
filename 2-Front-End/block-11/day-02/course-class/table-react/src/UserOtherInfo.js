// This file is a component son of App.js and brother os UserName.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserOtherInfo extends Component {  
  render() {
    const { email, id } = this.props // Object destructuring. Accessing the properties from the file Table.js line 24. We can't change this object - This object is used by the React to control the received React properties. So never perfor assignments to this.props.
    return (<span>{email} {id}</span>)  
  }  
}

UserOtherInfo.propTypes = { // Restricting the prop types allowed. It's a way to grant that our component it's being used just in the way that we want. In this way is resgistred in the code the correct way to use this component.
  email: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default UserOtherInfo;
