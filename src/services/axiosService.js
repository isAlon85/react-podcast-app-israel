import axios from 'axios';

export const getAllPodcasts = () => {

  var config = {
    method: 'get',
    url: `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`
  };

  return axios(config);

}

export const getOnePodcast = (podcastId, limit) => {
  
  if (!limit) limit = 20;

  var url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=${limit}`;

  var config = {
    method: 'get',
    url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  };

  return axios(config);

}