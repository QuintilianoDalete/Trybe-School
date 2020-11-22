// Video 1 - 1``33```: Ideia presentation (forms validation, defining a function which actualize the state of many different fields, how to pass a state from a child component toa dad component)

// Video 2 - 14``29```: In this exercise we created a form with a sintax similar to the traditional HTML, we made one of the values which compounds the form being controled by the react state. When this form element trigger an onChange event we take the value which is being inserted throws to the react state an from the state we show this value to the user. In this way this component its being controled by the React state.

// Video 3 - 8``2```: Making all our components become controled components being dealt by the same handle function.

// Video 4 - 18``09```: How to have generic handlers which deals with the logic of multiple components on the same place, how to make a react form with the form components being controled by the state dad`s component and how we pass a information from the child component to the state from the dad`s component as well how we can make a logic to validate errors from each component.

import React from 'react';
import './App.css';
import Form from './Form.js';

function App() {
  return (<Form />);
}

export default App;
