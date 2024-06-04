import axios from 'axios';

const DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;

export const getAllPodcasts = () => {

  var config = {
    method: 'get',
    url: `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`
  };

  return axios(config);

}

export const getOnePodcast = (podcastId) => {

  var url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

  var config = {
    method: 'get',
    url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  };

  return axios(config);

}