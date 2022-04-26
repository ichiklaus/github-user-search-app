import { useState, useEffect } from "react";

import Search from "../components/Search";
import Card from "../components/Card";

import { getGitUser as fetchGitHubUser } from "../services/getUser";

function Main() {
  const [user, setUser] = useState("");
  const [exists, setExists] = useState(false);

  // Fetches data for the first time
  useEffect(() => {
    fetchGitHubUser("octocat", setUser, setExists);
  }, []);

  // executed on child
  function getUser(username) {
    setUser(username);
    fetchGitHubUser(username, setUser, setExists);
  }

  return (
    <div className="flex flex-col justify-center">
      <Search getUser={getUser} />
      <Card user={user} exists={exists} />
    </div>
  );
}

export default Main;
