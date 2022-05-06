import React from 'react';
import useSWR from 'swr';
import PropTypes from 'prop-types';
import { API_URL, fetcher } from '../services/api/index';

function Card({
  user,
}) {
  const { data, error } = useSWR(`${API_URL}${user}`, fetcher);

  if (error) {
    return (
      <div id="user-wrapper" className="rounded-xl theme-shadow card">
        {error && (
          <div className="content-center h-64 text-center grid xl:grid-col-6 gap-y-4 gap-x-6  py-6 ">
            <p className="text-red-500 ">User does not exists</p>
          </div>
        )}
      </div>
    );
  }

  if (!data) {
    return (
      <div id="user-wrapper" className="rounded-xl theme-shadow card">
        {error && (
          <div className="content-center h-64 text-center grid xl:grid-col-6 gap-y-4 gap-x-6  py-6 ">
            <p className="text-red-500 ">Loading user</p>
          </div>
        )}
      </div>
    );
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const joinedDate = new Date(data.created_at);
  const formattedJoinedDate = joinedDate.toLocaleDateString('en-US', options);

  function getTwitterLink(typeOfInput) {
    if (typeOfInput === 'link') {
      return data.twitter_username ? `https://twitter.com/${data.twitter_username}` : '';
    }
    return data.twitter_username || 'Not available';
  }

  return (
    /* Start of user card */
    <div id="user-wrapper" className="rounded-xl theme-shadow card">
      <div className="grid xl:grid-rows-4 xl:grid-flow-col gap-y-4 gap-x-6 rounded-xl px-5 py-6 ">
        <div id="user-picture" className="xl:row-span-4">
          <img
            src={data.avatar_url}
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
                    <span>{data.name}</span>
                    <a className="hover:underline text--blue" href={data.html_url}>
                      {' '}
                      <span>{`@${data.login}`}</span>
                    </a>
                  </p>
                  <p className="secondary-text-color">
                    {formattedJoinedDate}
                  </p>
                </div>
              </div>
            </div>
            <p className="secondary-text-color">{data.bio}</p>
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
                {data.public_repos}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="secondary-heading-color">Followers</span>
              <span className="main-text--white font-bold text-xl">
                {data.followers}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="secondary-heading-color">Following</span>
              <span className="main-text--white font-bold text-xl">
                {data.following}
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
            {!data.location && (
              <p className="secondary-text-color icon icon-city flex gap-x-4 break-all">
                Not available
              </p>
            )}
            {data.location && (
              <p className="main-text--white icon icon-city flex gap-x-4 break-all">
                {data.location}
              </p>
            )}
            {/* Render user current location info */}

            {/* Render twitter social */}
            {!data.twitter_username && (
              <p className="secondary-text-color icon icon-social flex gap-x-4 break-all">
                {getTwitterLink('text')}
              </p>
            )}
            {data.twitter_username && (
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                className="main-text--white icon icon-social flex gap-x-4 hover:underline break-all"
              >
                {getTwitterLink('text')}
              </a>
            )}
            {/* Render twitter social */}

            {/* Render blog/website */}
            {!data.blog && (
              <p className="secondary-text-color icon icon-website flex gap-x-4 break-all">
                Not available
              </p>
            )}
            {data.blog && (
              <a
                href={`${data.blog}`}
                className="main-text--white icon icon-website flex gap-x-4 hover:underline break-all"
              >
                {data.blog}
              </a>
            )}
            {/* Render blog/website */}

            {/* Render company info */}
            {!data.company && (
              <p className="secondary-text-color icon icon-company flex gap-x-4 break-all">
                Not available
              </p>
            )}
            {data.company && (
              <p className="main-text--white icon icon-company flex gap-x-4 break-all">
                {data.company}
              </p>
            )}
            {/* Render company info */}
          </div>
          {/* End of User social and location info */}
        </div>
      </div>
      {/* Start of user card */}
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Card;
