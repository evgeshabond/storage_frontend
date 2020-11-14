
// Create a "reducer" function that determines what the new state

import { combineReducers } from "redux"

// should be when something happens in the app


const counterReducer = (state = {value: 0}, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}



export default combineReducers({
  counter: counterReducer
})