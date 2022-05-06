import axios from 'axios';
import useSWR from 'swr';
// import ONLY_READ_ACCESS_TOKEN from './githubToken';
import READ_ONLY_GITHUB_TOKEN from '../auth/index';

const API_URL = 'https://api.github.com/users/';
const TOKENIZED_API_URL = `https://$${READ_ONLY_GITHUB_TOKEN}@raw.api.github.com/users/`;

async function getGitUser(username, setFunc, setBool) {
  try {
    const response = await axios.get(
      `${API_URL}${username}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${READ_ONLY_GITHUB_TOKEN}`,
        },
      },
    );
    const fetchedData = await response.data;
    setTimeout(() => {
      setFunc(fetchedData);
      setBool(true);
    }, '50');
  } catch (error) {
    setTimeout(() => {
      setBool(false);
    }, '200');
  }
}

const fetcher = (url) => axios.get(url);
function FetchGitHubUser(username, setFunc, setBool) {
  const { data, error } = useSWR(`${TOKENIZED_API_URL}${username}`, fetcher);
  if (error) setBool(false);
  if (data) {
    setBool(true);
    setFunc(data);
  }
}

export { getGitUser, FetchGitHubUser };
