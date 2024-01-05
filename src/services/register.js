import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/register';

const registerUser = (user) => axios.post(baseUrl, user)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });

export default registerUser;
