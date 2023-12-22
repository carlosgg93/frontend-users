import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

export const getAllUsers = () => axios.get(baseUrl)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });

export const addUser = (user) => axios.post(baseUrl, user)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });

export const deleteUser = (id) => axios.delete(`${baseUrl}/${id}`)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });

export const updateUser = (id, user) => axios.put(`${baseUrl}/${id}`, user)
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  });
