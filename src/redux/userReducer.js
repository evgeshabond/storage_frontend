const userReducer = (state = {}, action) => {
    switch (action.type) {
      case 'user/updateUser':
        return { ...state, ...action.updates }
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }