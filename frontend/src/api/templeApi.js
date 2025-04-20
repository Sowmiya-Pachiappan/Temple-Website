import axios from './indexApi';

export const getTemples = () => axios.get('/temples');
export const getVerifiedTemples = () =>
  axios.get('/temples/verified');

export const getTempleById = (id) =>
  axios.get(`/temples/${id}`);

export const createTemple = async (templeData) => {
  return axios.post('/temples', templeData);
};

export const updateTemple = async (id, updatedData) => {
  const token = await localStorage.getItem('token');
  return axios.put(`/temples/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
};

export const deleteTemple = async (id) => {
  const token = await localStorage.getItem('token');
  return axios.delete(`/temples/${id}`, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
};

export const verifyTemple = async (id) => {
  const token = await localStorage.getItem('token');
  return axios.put(
    `/temples/verify/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    }
  );
};
