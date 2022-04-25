import axios from "axios";
import { ONLY_READ_ACCESS_TOKEN } from "../api/githubToken";

export  async function getGitUser(username, setFunc) {
  // let gotUser = {};
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${ONLY_READ_ACCESS_TOKEN}`,
        },
      }
    );
    const fetchedData = await response.data;
    // gotUser = { ...fetchedData };
    setFunc(fetchedData);
  } catch (error) {
    console.log(error.message);
  }
  // return gotUser;
}

/*
        name,
      avatar_url,
      company,
      blog,
      location,
      email,
      followers,
      following,
      created_at,
      html_url,
*/
