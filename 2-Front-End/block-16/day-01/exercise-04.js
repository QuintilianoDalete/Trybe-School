// Creating a reducer which accepts actions of different types: https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      };
    case 'LOGOUT':
      return {
        authenticated: false
      };
  default:
    return defaultState;
  }


  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
