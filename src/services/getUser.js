import axios from "axios";
import { ONLY_READ_ACCESS_TOKEN } from "../services/githubToken";

export async function getGitUser(username, setFunc, setBool) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${ONLY_READ_ACCESS_TOKEN}`,
        },
      }
    );
    const fetchedData = await response.data;
    setTimeout(() => {
      setFunc(fetchedData);
      setBool(true);
    }, "50");
  } catch (error) {
    setTimeout(() => {
      setBool(false);
    }, "200");
    console.log(error.message);
  }
}
