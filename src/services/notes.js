import axios from 'axios';
const baseUrl ='http://localhost:3001/api/notes'

const token = window.localStorage.getItem('token')

export const getAllNotes = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export const addNote = (note) =>  {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    return axios.post(baseUrl, note, { headers })
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export const deleteNote = (id) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    return axios.delete(`${baseUrl}/${id}`, { headers })
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export const updateNote = (id, note) => {
    return axios.put(`${baseUrl}/${id}`, note)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}