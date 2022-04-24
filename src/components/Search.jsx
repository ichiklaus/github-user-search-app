import { useState } from "react";

// import getUser from "../api/getUser";

function Search({ getUser }) {
  // const [count, setCount] = useState(0);
  // let countByOne = () => {
  //   setCount(count + 1);
  // };

  const [user, setUser] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    // countByOne(count);
    getUser(user);
  }

  return (
    <form onSubmit={onSubmit}>
      <div
        id="search-form"
        className="icon icon-search flex flex-initial flex-row justify-center items-center py-4 rounded-md relative"
      >
        <input
          type="search"
          name="search-user"
          id="search-user"
          placeholder="Search Github username..."
          className="text-white outline-none xl:w-full w-full py-5 xl:px-20 px-11 rounded-lg text-xs 2xl:text-2xl xl:text-base lg:text-sm md:text-sm"
          // value={count}
          value={user}
          onChange={(event) => setUser((event.target.value))}
        />
        <button
          type="submit"
          className="border-solid font-bold px-4 py-2 rounded-lg text-white btn-search--blue absolute right-2 2xl:right-18 xl:right-4 lg:right-2 md:right-2 sm:right-2"
          // onClick={() => setCount(count + 1)}
          // onClick={getUser}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
