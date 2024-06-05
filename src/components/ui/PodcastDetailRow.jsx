import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function PodcastDetailRow({ item }) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  const [audioDuration, setAudioDuration] = useState('');

  // Get the track duration and convert it to min:s
  function secondsToMinutesAndSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${('0' + remainingSeconds).slice(-2)}`;
  }

  /*useEffect(() => {
    var audio = new Audio();
    audio.src = item?.episodeUrl;
  
    audio.addEventListener('loadedmetadata', function() {
      setAudioDuration(secondsToMinutesAndSeconds(audio.duration));
    });
  }, []) // eslint-disable-line react-hooks/exhaustive-deps*/
  
  return (
    <div className="podcast-detail-container-right-bottom-title episode-row d-flex justify-content-between align-items-center">
      <h6 className="as-a-button" onClick={ () => navigate(`episode/${item?.trackId}`, { state: { item: item } }) }>
        { item?.trackName }
      </h6>
      <div className="podcast-detail-container-right-bottom-title-end d-flex justify-content-end align-items-center">
        <h6>{ item?.releaseDate?.split('T')[0] }</h6>
        {/* audioDuration ? 
          <h6>{ audioDuration }</h6>
          :
          <div className="duration-loading skeleton"></div>
        */}
        <h6>{ "N/A" }</h6>
      </div>
    </div>
  )

}