import React from 'react';
import PropTypes from 'prop-types';

function Card({
  user,
  exists,
}) {
  const {
    login,
    html_url: htmlUrl,
    name,
    avatar_url: avatarUrl,
    company,
    blog,
    location,
    twitter_username: twitterUsername,
    followers,
    following,
    created_at: createdAt,
    public_repos: publicRepos,
    bio,
  } = user;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const joinedDate = new Date(createdAt);
  const formattedJoinedDate = joinedDate.toLocaleDateString('en-US', options);

  function getTwitterLink(typeOfInput) {
    if (typeOfInput === 'link') {
      return twitterUsername ? `https://twitter.com/${twitterUsername}` : '';
    }
    return twitterUsername || 'Not available';
  }

  return (
    /* Start of user card */
    <div id="user-wrapper" className="rounded-xl theme-shadow card">
      {!exists && (
        <div className="content-center h-64 text-center grid xl:grid-col-6 gap-y-4 gap-x-6  py-6 ">
          <p className="text-red-500 ">User does not exists</p>
        </div>
      )}
      {exists && (
        <div className="grid xl:grid-rows-4 xl:grid-flow-col gap-y-4 gap-x-6 rounded-xl px-5 py-6 ">
          <div id="user-picture" className="xl:row-span-4">
            <img
              src={avatarUrl}
              alt="username"
              className="main-text--white w-24 h-24 rounded-full"
            />
          </div>
          <div
            id="user-card"
            className="grid xl:grid-rows-3 gap-y-10 row-span-4 col-span-1  text-center xl:text-left"
          >
            {/* Start of User main info like username, name, github url */}
            <div
              id="user-main"
              className="flex flex-col flex-wrap xl:flex-col xl:justify-around text-left gap-y-6 "
            >
              <div className="flex xl:flex-col xl:justify-around text-left xl:relative gap-x-6">
                <div
                  id="user-main-info"
                  className="xl:flex xl:flex-col xl:gap-y-4"
                >
                  <div className="flex flex-col xl:flex-row xl:justify-between">
                    <p
                      id="userByName"
                      className="main-text--white flex flex-col"
                    >
                      <span>{name}</span>
                      <a className="hover:underline text--blue" href={htmlUrl}>
                        {' '}
                        <span>{`@${login}`}</span>
                      </a>
                    </p>
                    <p className="secondary-text-color">
                      {formattedJoinedDate}
                    </p>
                  </div>
                </div>
              </div>
              <p className="secondary-text-color">{bio}</p>
            </div>
            {/* End of User main info like username, name, github url */}
            {/* -------------------------------------------------------------------------------- */}
            {/* Start of User stats info */}
            <div
              id="user-stats"
              className="flex xl:flex-row justify-between xl:items-center xl:gap-x-20 user-stats--bg rounded-lg xl:px-4 px-2 py-3 text-left"
            >
              <p className="flex flex-col">
                <span className="secondary-heading-color">Repos</span>
                <span className="main-text--white font-bold text-xl">
                  {publicRepos}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="secondary-heading-color">Followers</span>
                <span className="main-text--white font-bold text-xl">
                  {followers}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="secondary-heading-color">Following</span>
                <span className="main-text--white font-bold text-xl">
                  {following}
                </span>
              </p>
            </div>
            {/* End of User stats info */}
            {/* -------------------------------------------------------------------------------- */}
            {/* Start of User social and location info */}
            <div
              id="user-loc-info"
              className="grid xl:grid-cols-2 text-left xl:gap-x-10 xl:gap-y-0 gap-y-3"
            >
              {/* Render user current location info */}
              {!location && (
                <p className="secondary-text-color icon icon-city flex gap-x-4 break-all">
                  Not available
                </p>
              )}
              {location && (
                <p className="main-text--white icon icon-city flex gap-x-4 break-all">
                  {location}
                </p>
              )}
              {/* Render user current location info */}

              {/* Render twitter social */}
              {!twitterUsername && (
                <p className="secondary-text-color icon icon-social flex gap-x-4 break-all">
                  {getTwitterLink('text')}
                </p>
              )}
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="main-text--white icon icon-social flex gap-x-4 hover:underline break-all"
                >
                  {getTwitterLink('text')}
                </a>
              )}
              {/* Render twitter social */}

              {/* Render blog/website */}
              {!blog && (
                <p className="secondary-text-color icon icon-website flex gap-x-4 break-all">
                  Not available
                </p>
              )}
              {blog && (
                <a
                  href={`${blog}`}
                  className="main-text--white icon icon-website flex gap-x-4 hover:underline break-all"
                >
                  {blog}
                </a>
              )}
              {/* Render blog/website */}

              {/* Render company info */}
              {!company && (
                <p className="secondary-text-color icon icon-company flex gap-x-4 break-all">
                  Not available
                </p>
              )}
              {company && (
                <p className="main-text--white icon icon-company flex gap-x-4 break-all">
                  {company}
                </p>
              )}
              {/* Render company info */}
            </div>
            {/* End of User social and location info */}
          </div>
        </div>
      )}
      {/* Start of user card */}
    </div>
  );
}

Card.propTypes = {
  // user: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    twitter_username: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    public_repos: PropTypes.number.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
  exists: PropTypes.bool.isRequired,
};

export default Card;
