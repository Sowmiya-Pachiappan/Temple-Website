import axios from './indexApi';

export const getTemples = () => axios.get('/temples');

export const getTempleById = (id) =>
  axios.get(`/temples/${id}`);

export const createTemple = async (templeData) => {
  const token = await localStorage.getItem('token');
  return axios.post('/temples', templeData, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
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
