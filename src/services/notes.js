import api from './api';

export const getAllNotes = async () => {
  const response = await api({
    method: 'get',
    url: 'notes',
  });

  return response;
};

export const addNote = async (note) => {
  const response = await api({
    method: 'post',
    url: 'notes',
    body: note,
  });

  return response;
};

export const deleteNote = async (id) => {
  const response = await api({
    method: 'delete',
    url: `notes/${id}`,
  });

  return response;
};

export const updateNote = async (id, note) => {
  const response = await api({
    method: 'put',
    url: `notes/${id}`,
    body: note,
  });

  return response;
};
