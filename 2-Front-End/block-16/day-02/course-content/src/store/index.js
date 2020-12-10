// 1st application step: Defining the store. The function create store should receive a reducer as a parameter.

import { combineReducers, createStore } from 'redux';
import listReducer from '../reducers'; // 4th

const rootReducers = combineReducers({ listReducer }); //4th - The method combineReducers receives an object with the created reducers. When we use the combineReducers, our application state is stored in an object. Inside this object each reducer will have a key. This key value will be the state which this reducer is responsable for managing.

const store = createStore(rootReducers);

export default store;
