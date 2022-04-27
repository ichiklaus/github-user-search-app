import React from 'react';

import Main from './layouts/Main';
import Header from './layouts/Header';

function App() {
  return (
    <div className="App xl:h-full flex flex-col justify-center container mx-auto px-6 py-12 xl:px-0 my-0 xl:w-6/12 lg:w-8/12 md:w-10/12">
      <Header />
      <Main />
    </div>
  );
}

export default App;
