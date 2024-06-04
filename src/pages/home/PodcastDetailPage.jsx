import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App.js";
import { getOnePodcast } from "../../services/axiosService.js";
import { useParams } from "react-router-dom";
import PodcastCard from "../../components/ui/PodcastCard.jsx";
import PodcastLoading from "../../components/ui/PodcastLoading.jsx";
import PodcastDetail from "../../components/ui/PodcastDetail.jsx";

function PodcastDetailPage(props) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  let { podcastId } = useParams();

  const { onePodcast, 
    setOnePodcast,
    onePodcastIsLoading, 
    setOnePoscastIsLoading,
    onePodcastError, 
    setOnePodcastError 
  } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      if (!onePodcastIsLoading) {
        setOnePoscastIsLoading(true);
        setOnePodcastError(false);
        await getOnePodcast(podcastId)
        .then((response) => {
          setOnePodcast(JSON.parse(response.data.contents)?.results);
        })
        .catch((error) => {
          setOnePodcastError(true);
          console.error(error)
        })
        .finally(() => setOnePoscastIsLoading(false))
      }
    }
    fetchData();
  }, []);

  return (
    <section id="podcast-section" className="podcast-section d-flex flex-column justify-content-center align-items-center">
    { onePodcastIsLoading ?
      <div className="podcast-detail-container d-flex justify-content-center align-items-center">
        <PodcastLoading/>
        <PodcastLoading/>
      </div>
      :
      onePodcastError ?
      <h3>{t('home.error')}</h3>
      :
      <div className="podcast-detail-container d-flex justify-content-between">
        <PodcastDetail item = { onePodcast }/>
        <div className="podcast-detail-container-right d-flex flex-column">
          <div className="podcast-detail-container-right-top d-flex flex-column justify-content-center align-items-start">
            {`${t('podcastDetail.episodes')}: ${onePodcast[0]?.trackCount}`}
          </div>
          <div className="podcast-detail-container-right-bottom d-flex flex-column justify-content-center align-items-start">
          
          </div>
        </div>
      </div>
    
    }
    </section>
  );
}

export default PodcastDetailPage;