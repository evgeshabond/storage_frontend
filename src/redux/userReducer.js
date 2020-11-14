const userReducer = (state = {}, action) => {
    switch (action.type) {
      case 'user/updateUser':
          console.log(...action.user)
        return { ...state, ...action.user }
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }

  export default userReducer