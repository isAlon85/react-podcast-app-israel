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

  var config = {
    method: 'get',
    url: `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=9${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`
  };

  return axios(config);

}