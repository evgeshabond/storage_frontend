// Create a "reducer" function that determines what the new state

import { combineReducers } from "redux";
// import userReducer from './userReducer'

// should be when something happens in the app

const counterReducer = (state = { value: 0 }, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
};

const userReducer = (
  state = {
    _id: "",
    login: "",
    firstName: "",
    lastName: "",
  },
  action
) => {
  switch (action.type) {
    case "user/updateUser":
      return { ...state, ...action.user };
    case "user/updateUserTest":
      return { ...state, name: "updated" };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
};

const tokenReducer = (
  state = {
    value: "",
  },
  action
) => {
  switch (action.type) {
    case "token/updateToken":
      return { ...state, value: action.token };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  token: tokenReducer
});

export default rootReducer;
