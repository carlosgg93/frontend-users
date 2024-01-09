import { TOKEN_KEY, USER_KEY } from './constants';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setUSer = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem(USER_KEY);
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  return user;
};

export const isLogged = () => {
  if (localStorage.getItem(TOKEN_KEY)) return true;
  return false;
};
