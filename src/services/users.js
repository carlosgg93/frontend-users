import axios from 'axios';
const baseUrl ='http://localhost:3001/api/users'

export const getAllUsers = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export const addUser = (user) =>  {
    return axios.post(baseUrl, user)
        .then(response => response.data)
}

export const deleteUser = (id) => {
    return axios.delete(+`${baseUrl}/${id}`)
        .then(response => response.data)
}

export const updateUser = (id, user) => {
    return axios.put(`${baseUrl}/${id}`, user)
        .then(response => response.data)
}