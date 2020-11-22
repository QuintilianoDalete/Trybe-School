// Child component
// any information we need to give to the dad component we add to his state and ccreate a function to manege with this state and pass it through prop to the child.
import React, { Component } from 'react';

class FavouriteState extends Component {
  render() {
    const { value, handleChange } = this.props; // Here in the child component we take this prop declred on the line 35 from the dad (Form.js).

    let error = undefined; // Defining an error when the text is too long. Continues on the line 33. If with the error information we want to do something, we just add it to the dad`d state 
    if(value.length > 33) error = "text too long";

    return(
      <label>
          Type yout favourite state! from Brazil or react, you who knows!
          {/* Associating the state to this element
              * Every element has a value. This value will be the value which is in the state.
              * We must have an event on the "onChange" that will say how this value will go to the dad`s state. In order to do that we must create a function (l22 from the file Form.js). */}
          <textarea 
            name="favouriteState" 
            value={value}
            onChange={handleChange} 
          /> {/* We passed the handleChange function to our onChange method in the line above (l15).
            
          * We added the created function (handleChange) inside de event onChange
          * When we start an event, the function which is dealing with this event can receive the parameter "event" (l22 from the file Form.js).
          * Each time that the onChange is runned it performs the action which is inside the function handleChange() (l22 from the file Form.js).
          * In this way we can take the values which are being tiped by the user and and throw it inside ours event handle (l18)
          * We added to this component value the state value, closing the cicle (value={this.state.favouriteState}) 
          
          * Summarizing: We took this element 'text area' (l34 - Form.js) and did: When it suffer an change it will trigger the onChange event (l37 - Form.js), this onChange event will take the value typed by the user (l21 - Form.js) and add it to the state field (l21 and l11 - Form.js). The value which will appear in the element (l36 - Form.js) its the value from the state field.
          
          * Instead simply take the typed values and leave it inside the HTML (DOM) we are taking this value throwing it inside the state and from the state we are showing it inside the component .
          * Our element stopped dealling with its own information and now it is dealling with the information according to the React is asking it to do. The react state is dealing with this information. This component isn't dealing with its own information. it is being controled by the state react component. When an form element starts being controled by the React state the name of this is "CONTROLED COMPONENT"  */}
          <span>{error ? error : ''}</span> {/* This component is showing the errors. We can with all sub components make the validations. If error doesn`t have undefined we`ll print the error (error ? error), if not (:) we don`t print anything ('') */}
        </label>
    )
  }
}

export default FavouriteState;
