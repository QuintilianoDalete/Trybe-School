// Using the spread operator as a tool to keep the state imutability: https://www.freecodecamp.org/learn/front-end-libraries/redux/use-the-spread-operator-on-arrays

const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      let array = [...state, action.todo]
      return array;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
