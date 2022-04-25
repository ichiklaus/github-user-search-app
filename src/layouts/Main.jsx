import { useState, useEffect } from "react";
import axios from "axios";

import Search from "../components/Search";
import Card from "../components/Card";

import {getGitUser as fetchGitHubUser} from "../api/getUser";

function Main() {
  //   const [count, setCount] = useState(0);
  //   let countByOne = (count) => {
  //     setCount(count);
  //   };

  const [user, setUser] = useState("");

  // executed on child
  function getUser(username) {
    setUser(username);
    fetchGitHubUser(username, setUser);
  }

  return (
    <div className="flex flex-col justify-center">
      <Search getUser={getUser} />
      <Card user={user} />
    </div>
  );
}

export default Main;
