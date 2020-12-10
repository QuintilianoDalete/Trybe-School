// 2nd application step: Defining the reducer. This reducer will be able to add items to the list.

const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value]; // The spread operator prevent us to change all the state object by action.value. In this way, just the key action.value will be changed by the new state.
    default:
      return state;  
  }
}

export default listReducer;
