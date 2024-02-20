// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';
import { useSelector, useDispatch } from 'react-redux';
const store = configureStore({
  reducer: rootReducer,
  // Add middleware or enhancers here if needed
});

export default store;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = () => useSelector();