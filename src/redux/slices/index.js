// src/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Other reducers can be added here
});

export default rootReducer;
