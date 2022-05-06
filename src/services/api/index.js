import axios from 'axios';
import READ_ONLY_GITHUB_TOKEN from '../auth/index';

const API_URL = 'https://api.github.com/users/';
const fetcher = (url) => axios.get(
  url,
  {
    method: 'GET',
    headers: {
      Authorization: `Basic ${READ_ONLY_GITHUB_TOKEN}`,
    },
  },
)
  .then((response) => response.data);

export { API_URL, fetcher };
