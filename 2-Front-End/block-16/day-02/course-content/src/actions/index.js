// 3rd application step: Defining the action file. The action object can have many keys, in this case we have the key type and the key value, which stores the value received by the action.

export const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });
