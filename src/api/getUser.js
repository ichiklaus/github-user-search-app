import axios from "axios";

export default async function getGitUser(username) {
  let gotUser = {};
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const fetchedData = await response.data;
    // ({ login } = fetchedData);
    gotUser = { ...fetchedData };
    // console.log(login);
    // console.log(gotUser);
  } catch (error) {
    console.log(error.message);
  }

  return gotUser;
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
