import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/login';

const login = (credentials) => axios.post(baseUrl, credentials)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });

export default login;
