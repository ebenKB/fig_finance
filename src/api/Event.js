import Axios from 'axios';

export const loadEventsFromAPI = async (page=1, limit=10) => {
  return await Axios.get(`http://localhost:8080/event?page=${page}&limit=${limit}`);
}