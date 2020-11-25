// Create a "reducer" function that determines what the new state

import { combineReducers } from "redux";
// import userReducer from './userReducer'

// should be when something happens in the app

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
  user: userReducer,
  token: tokenReducer
});

export default rootReducer;
