import axios from 'axios';

export default () => {
  const baseURL = 'http://localhost:8081';
  return axios.create({ baseURL });
}
