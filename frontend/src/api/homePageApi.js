import axios from './indexApi';

export const getHomePageContent = async () =>
  axios.get('/api/homepage');

export const updateHomePageContent = async (payload) => {
  const token = await localStorage.getItem('token');
  return axios.put('/api/homepage/update', payload, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
};
