// Dad component
// The dad has the control of it`s own state all the time. It has all information inside itself and say to the children components how this informations will be changed. It does with the child components: Give the function as a prop to the child, who takes the information typed from the user and apply it it as a parameter to the function received from the dad, this function will be executed in the dad state. 
// In this way we can take the values from each child component and pass it to the dad component and deal with this information in a centralized way (using call back functions).
import React, { Component } from 'react';
import FavouriteState from './FavouriteState';
import Age from './Age';
import './Form.css'

class Form extends Component {
  constructor() { // The dad function (Form.js) is the state owner. In order to have a inicial state we must define a constructor(). Previously, when we used to use the "common" JS, the information tiped inside the forms fields was stored inside the DOM. With react is different, this information is stored inside the state. 
    super()

    this.handleChange = this.handleChange.bind(this); // This line was written just after the definition of onChande from the line 34 and the function handleTextAreaChange() from the line 18.

    this.state = { // Inicial state definition. Giving to our states fields the same name that our elements.
      favouriteState: '',
      name: '',
      email: '',
      age: 0,
      willAttend: false,
      preferedKeyWord: ''
      // erroFavouriteState: '' // Example of how to take actions from errors. Continues on the line 25.
    }
  }

  // handleErrors // We create this function to deal with the errors, pass it to the children through props and repeat the process from the handleChange functions.

  // This function manipulates the state from the dad (Form.js). This function will receive the event triggered in the onChange functions. Actualizing our state according to the value types by the user in our form fields.
  handleChange({ target }) { // { target } is a object destructiring, we use it in order to take the event straight on the line 22.
    const { name } = target; // This const are taking the name from the target sended by the onChange functions.
    const value = target.type === 'checkbox' ? target.checked : target.value; // In order to take the boolean from the checkbox on the line 84 we must associate the const 'value' to a ternary. If (=) 'target.type' be equal (===) 'checkbox' we take (?) the 'target.checked', if not (:) we will take the 'target.value'
    this.setState({ // This function manipulates the state.
      [name]: value // Interpolating the valiable name "[name]" to be the object key name. For example, when the object name be "favouriteState", [name] === "favouriteState". If we change the componen to "email", [name] === email. 
    })
  }

  render() { // The form JSX structure. When we have a to big render we can divide our components in samller ones.
    return (
    <div>
      <h1>States and React: Incredible tool or reacting to regionalisms?</h1>
      <form className="form">
        <FavouriteState value={this.state.favouriteState} handleChange={this.handleChange}/> {/* This is a child component which is in the file 'FavouriteState.js. As well we passed the handleChange functions as prop from our FavouriteState (child of Form.js) */}

        <label>
          Email
          <input 
            type="email"
            name="email" 
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Name
          <input 
            type="text"
            name="name" 
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <Age value={this.state.age} handleChange={this.handleChange}/>

        <label> {/* Specifically in the checkboxes the boolean don't be stored in the 'value'. Especifically to the checkboxes this bollean value is stored inside a key named 'checked'. Go to line 23 in order to recover the boolean value */}
          Will attend to the conference?
          <input 
            type="checkbox"
            name="willAttend" 
            value={this.state.willAttend}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Choose your prefered key word:
          <select name="preferedKeyWord" value={this.state.preferedKeyWord} onChange={this.handleChange}>
            <option value="state">State</option>
            <option value="event">Event</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </form>
    </div>);
  }
}

export default Form;
