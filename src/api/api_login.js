import axios from 'axios';

const api_login = async (login, password) => {
    
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
        login: login,
        password: password
      })
      return response;

  }

  export default api_login