// Searching a state inside a Redux store

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

let currentState = store.getState()