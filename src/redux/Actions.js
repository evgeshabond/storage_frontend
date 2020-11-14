import api_login from '../api/api_login'

const updateUser = ({user}) => {
    return {
        type: 'user/updateUser',
        user
    }
}

const updateToken = ({token}) => {
    return {
        type: 'token/updateToken',
        token
    }
}


export { updateUser, updateToken }