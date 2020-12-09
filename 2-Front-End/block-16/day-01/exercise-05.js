// Using const to the action types: https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types

// Change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// Change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    // Line below changed
    case LOGIN:
      return {
        authenticated: true
      }
    // Line below changed
    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    // Line below changed
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    // Line below changed
    type: LOGOUT
  }
};

