import TOKEN_KEY from './constants';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isLogged = () => {
  if (localStorage.getItem(TOKEN_KEY)) return true;
  return false;
};
