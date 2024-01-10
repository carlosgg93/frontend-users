import api from './api';

const loginUser = async (credentials) => {
  const respone = await api({
    method: 'post',
    url: 'login',
    body: credentials,
  });

  return respone;
};

export default loginUser;
