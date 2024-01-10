import api from './api';

const registerUser = async (user) => {
  const response = await api({
    method: 'post',
    url: 'register',
    body: user,
  });

  return response;
};

export default registerUser;
