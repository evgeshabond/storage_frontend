import axios from 'axios';

const api_login = async (login, password) => {
    
      const response1 = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
        login: login,
        password: password
      })
      return response1;

  }

  export default api_login