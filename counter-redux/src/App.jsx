import React from 'react'
import './App.css'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './combReducer'


function App() {
  const store = createStore(
    allReducers,
  );
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Counter App</h1>
        <Counter />
    </div>
    </Provider>
  )
}

export default App
