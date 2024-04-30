// store.js

import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/SignLogReducer.js';
// import authReducer from './reducers/authReducer.js';

const rootReducer = combineReducers({
  auth: authReducer
  // other reducers here 
});

const store = createStore(rootReducer);

export default store;
