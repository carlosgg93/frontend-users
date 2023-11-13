import axios from 'axios';
const baseUrl ='http://localhost:3001/api/notes'

export const getAllNotes = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
}

export const addNote = (note) =>  {
    return axios.post(baseUrl, note)
        .then(response => response.data)
}

export const deleteNote = (id) => {
    return axios.delete(+`${baseUrl}/${id}`)
        .then(response => response.data)
}

export const updateNote = (id, note) => {
    return axios.put(`${baseUrl}/${id}`, note)
        .then(response => response.data)
}