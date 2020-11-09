// This file is the component son of App.js

import React, { Component } from 'react';
import UserName from './UserName';
import UserOtherInfo from './UserOtherInfo';

class Table extends Component {  // We wont put data inside the render func. it was made here just to the example.
  render() {
    const users = [
    {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
       avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    }, 
    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },
    {
      id: 42,
      name: "Lucas Ferraz",
      email: "Lucas@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    }
    ]

    return (
      users.map(user => (  // We took our data from the array of objects (line 9 to 22). We ran through this array using .map. And to each array element we returned a div and inside this div our two elements. As well we rendered a group of components to each array element. 
        <div> {/* We can use many smaller componets in order to compound a bigger component. */}
          <UserName name={user.name} /> {/* Passing a parameter to the component. We can pass information to this smaler components through the components properties */}
          <UserOtherInfo email={user.email} id={user.id} /> {/* Passing a parameter to the component */}
        </div>
      )))
  }
}

export default Table;
