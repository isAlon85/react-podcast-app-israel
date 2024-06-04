import React from 'react';
import { useTranslation } from "react-i18next";

export default function PodcastDetailEpisode({ item }) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <div className="podcast-episode d-flex flex-column justify-content-center align-items-start">
      <h3>{`${item?.trackName}`}</h3>
      <p>{`${item?.description}`}</p>
      { item?.episodeUrl ? 
        <audio controls>
          <source
            id="audio-player-mp3"
            name="audio-player"
            src={item?.episodeUrl}
            type="audio/mp3"
          />
          <source 
            id="audio-player-ogg"
            name="audio-player"
            src={item?.episodeUrl}
            type="audio/ogg"
          />
          {/* Fallback content */}
          {t('podcastDetail.audioFallback')}
        </audio>
        :
        null
      }
    </div>
  )

}