// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;
