import {
  React, useState, useEffect,
} from 'react';

import Search from '../components/Search';
import Card from '../components/Card';

// import getGitUser from '../services/getUser';

function Main() {
  const [user, setUser] = useState('');

  // Fetches data for the first time
  useEffect(() => {
    setUser('octocat');
  }, []);

  // executed on child
  const getUser = (username) => {
    setUser(username);
  };

  return (
    <div className="flex flex-col justify-center">
      <Search getUser={getUser} />
      <Card user={user} />
    </div>
  );
}

export default Main;
