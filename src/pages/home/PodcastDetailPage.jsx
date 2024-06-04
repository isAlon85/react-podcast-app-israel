import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App.js";
import PodcastCard from "../../components/ui/PodcastCard.jsx";
import { getOnePodcast } from "../../services/axiosService.js";
import PodcastLoading from "../../components/ui/PodcastLoading.jsx";

function PodcastDetailPage(props) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

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
        await getOnePodcast()
        .then((response) => {
          setOnePodcast(JSON.parse(response.data.contents).feed.entry);
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
    <section id="home-section" className="home-section d-flex flex-column justify-content-center align-items-center">
    { onePodcastIsLoading ?
      <div className="home-podcast d-flex justify-content-center align-items-center">
        <PodcastLoading/>
        <PodcastLoading/>
      </div>
      :
      onePodcastError ?
      <h3>Error</h3>
      :
      <div className="home-podcast d-flex flex-column justify-content-center align-items-center">
        <div className="podcast-input-container d-flex flex-row justify-content-center justify-content-md-end align-items-center">

        </div>
        <div className="cards-container d-flex flex-wrap justify-content-center align-items-start">
          {
            !onePodcast.length ? 
              <h3>Sin resultados</h3>
              :
              onePodcast.map((item) => {
                  return (
                    <PodcastCard key={ item.id.attributes["im:id"] } podcast={ item }/>
                  )
              })
          }
        </div>
      </div>
    
    }
    </section>
  );
}

export default PodcastDetailPage;