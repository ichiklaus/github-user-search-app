// import octocat from "../assets/octocat.png";
function Card({
  user: {
    login,
    html_url,
    name,
    avatar_url,
    company,
    blog,
    location,
    twitter_username,
    followers,
    following,
    created_at,
    public_repos,
    bio,
  },
}) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const joinedDate = new Date(created_at);
  const formattedJoinedDate = joinedDate.toLocaleDateString("en-US", options);

  function getTwitterLink(typeOfInput) {
    if (typeOfInput === "link") {
      return twitter_username ? `https://twitter.com/${twitter_username}` : "";
    } else if (typeOfInput === "text") {
      return twitter_username ? twitter_username : "Not available";
    }
  }

  return (
    <div
      id="user-card"
      className="flex flex-col justify-center items-center px-3 py-6 gap-y-6 xl:flex-initial xl:flex-row xl:justify-around rounded-xl text-center xl:text-left"
    >
      <div
        id="user-profile"
        className="grid xl:grid-rows-3 gap-y-10 xl:relative xl:left-14"
      >
        <div
          id="user-main"
          className="flex flex-col flex-wrap xl:flex-col xl:justify-around text-left gap-y-6 "
        >
          <div className="flex xl:flex-col xl:justify-around text-left xl:relative gap-x-6">
            <div
              id="user-picture"
              className="xl:absolute xl:-left-36 xl:top-0"
            >
              <img
                src={avatar_url}
                alt={"username"}
                className="main-text--white w-24 h-24 rounded-full"
              />
            </div>
            <div id="user-main-info" className="xl:flex xl:flex-col xl:gap-y-4">
              <div className="flex flex-col xl:flex-row xl:justify-between">
                <p id="userByName" className="main-text--white flex flex-col">
                  <span>{name}</span>
                  <a className="hover:underline text--blue" href={html_url}>
                    {" "}
                    <span>{`@${login}`}</span>
                  </a>
                </p>
                <p className="secondary-text-color">{formattedJoinedDate}</p>
              </div>
            </div>
          </div>
          <p className="secondary-text-color">{bio}</p>
        </div>
        <div
          id="user-stats"
          className="flex xl:flex-row justify-between xl:items-center xl:gap-x-20 user-stats--bg rounded-lg xl:px-4 px-2 py-3 text-left"
        >
          <p className="flex flex-col">
            <span className="secondary-heading-color">{"Repos"}</span>
            <span className="main-text--white font-bold text-xl">
              {public_repos}
            </span>
          </p>
          <p className="flex flex-col">
            <span className="secondary-heading-color">{"Followers"}</span>
            <span className="main-text--white font-bold text-xl">
              {followers}
            </span>
          </p>
          <p className="flex flex-col">
            <span className="secondary-heading-color">{"Following"}</span>
            <span className="main-text--white font-bold text-xl">
              {following}
            </span>
          </p>
        </div>
        <div
          id="user-loc-info"
          className="grid xl:grid-cols-2 text-left xl:gap-x-10 xl:gap-y-0"
        >
          <p className="main-text--white icon icon-city flex gap-x-3">
            {location}
          </p>
          {!twitter_username && (
            <p className="main-text--white icon icon-social flex gap-x-3">
              {getTwitterLink("text")}
            </p>
          )}
          {twitter_username && (
            <a
              href={`https://twitter.com/${twitter_username}`}
              className="main-text--white icon icon-social flex gap-x-3 hover:underline"
            >
              {getTwitterLink("text")}
            </a>
          )}
          {!blog && (
            <p className="main-text--white icon icon-website flex gap-x-3">
              {"Not abailable"}
            </p>
          )}
          {blog && (
            <a
              href={`${blog}`}
              className="main-text--white icon icon-website flex gap-x-3 hover:underline"
            >
              {blog}
            </a>
          )}
          <p className="main-text--white icon icon-company flex gap-x-3">
            {company ? company : "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
