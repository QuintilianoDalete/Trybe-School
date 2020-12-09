// Searching a state inside a Redux store: https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

let currentState = store.getState()