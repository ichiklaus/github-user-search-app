import { useState, useEffect } from "react";

import Search from "../components/Search";
import Card from "../components/Card";

import axios from "axios";

function Main() {
  //   const [count, setCount] = useState(0);
  //   let countByOne = (count) => {
  //     setCount(count);
  //   };

  const [user, setUser] = useState("");

  // executed on child
  function getUser(username) {
    setUser(username);
   fetchGitUser(username);
  }

  async function fetchGitUser(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const fetchedData = await response.data;
      setUser(fetchedData);
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log("🚀 ~ file: Main.jsx ~ line 15 ~ Main ~ user", user.location);

  return (
    <div className="flex flex-col justify-center">
      <Search getUser={getUser} />
      <Card user={user} />
    </div>
  );
}

export default Main;
