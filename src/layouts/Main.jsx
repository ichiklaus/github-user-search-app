import {
  React, useState, useEffect, useCallback,
} from 'react';

import Search from '../components/Search';
import Card from '../components/Card';

// import getGitUser from '../services/getUser';
import { FetchGitHubUser } from '../services/api/index';

function Main() {
  const [user, setUser] = useState('');
  const [exists, setExists] = useState(false);

  // Fetches data for the first time
  useEffect(() => {
    FetchGitHubUser('octocat', setUser, setExists);
  }, []);

  // executed on child
  const getUser = useCallback((username) => {
    setUser(username);
    FetchGitHubUser(username, setUser, setExists);
  }, [setUser, setExists]); // if this doesnt work, remove second parameter

  // const getUser = (username) => {
  //   setUser(username);
  //   getGitUser(username, setUser, setExists);
  // };

  return (
    <div className="flex flex-col justify-center">
      <Search getUser={getUser} />
      <Card user={user} exists={exists} />
    </div>
  );
}

export default Main;
