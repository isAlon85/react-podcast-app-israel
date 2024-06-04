import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App.js";
import { getOnePodcast } from "../../services/axiosService.js";
import { useParams, useLocation } from "react-router-dom";
import PodcastDetail from "../../components/ui/PodcastDetail.jsx";
import PodcastDetailRow from "../../components/ui/PodcastDetailRow.jsx";
import PodcastDetailLoading from "../../components/ui/PodcastDetailLoading.jsx";
import PodcastDetailCounter from "../../components/ui/PodcastDetailCounter.jsx";
import PodcastDetailCounterLoading from "../../components/ui/PodcastDetailCounterLoading.jsx";
import PodcastDetailEpisode from "../../components/ui/PodcastDetailEpisode.jsx";

function PodcastDetailPage(props) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  let { podcastId, episodeId } = useParams();
  const location = useLocation();

  const onePodcastData = localStorage.getItem(podcastId) ? JSON.parse(localStorage.getItem(podcastId)) : null;

  const [episode, setEpisode] = useState(episodeId && location?.state?.item ? true : false);

  const { onePodcast, 
    setOnePodcast,
    onePodcastLastUpdate, 
    setOnePodcastLastUpdate,
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
          localStorage.setItem(podcastId, JSON.stringify({ timestamp: Date.now(), data: JSON.parse(response.data.contents)?.results }));
        })
        .catch((error) => {
          setOnePodcastError(true);
          console.error(error)
        })
        .finally(() => setOnePoscastIsLoading(false))
      }
    }
    if (onePodcastLastUpdate !== null && (!onePodcast.length || onePodcastLastUpdate + 86400000 < Date.now())) {
      fetchData();
    }
  }, [onePodcastLastUpdate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setEpisode(episodeId && location?.state?.item ? true : false);
  }, [location, episodeId]);

  useEffect(() => {
    setOnePodcastError(false);
    setOnePodcast(onePodcastData?.data ? onePodcastData?.data : []);
    setOnePodcastLastUpdate(onePodcastData?.timestamp ? onePodcastData?.timestamp : false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="podcast-section" className="podcast-section d-flex flex-column justify-content-center align-items-center">
    { onePodcastError ?
      <h3>{t('home.error')}</h3>
      :
      <div className="podcast-detail-container d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start">
        { onePodcastIsLoading ?
          <PodcastDetailLoading/>
          :
          <PodcastDetail 
            item = { onePodcast } 
            setEpisode = { setEpisode }
          />
        }
        <div className="podcast-detail-container-right d-flex flex-column">
        { episode ? 
          <PodcastDetailEpisode item = { location?.state?.item }/>
          :
          <>
            
            { onePodcastIsLoading ?
              <>
                <PodcastDetailCounterLoading/>
                <PodcastDetailCounterLoading/>
              </>
              :
              <>
                <PodcastDetailCounter item = { onePodcast }/>
                <div className="podcast-detail-container-right-bottom d-flex flex-column justify-content-center align-items-start">
                  <div className="podcast-detail-container-right-bottom-title d-flex justify-content-between align-items-center">
                      <h6>{t('podcastDetail.title')}</h6>
                      <div className="podcast-detail-container-right-bottom-title-end d-flex justify-content-end align-items-center">
                        <h6>{t('podcastDetail.date')}</h6>
                        <h6>{t('podcastDetail.duration')}</h6>
                      </div>
                    </div>
                    { onePodcast.map((item, index) => {
                        if (index) {
                          return <PodcastDetailRow key={ item?.trackId } item={ item }/>
                        } else return null
                        })
                    }
                </div>
              </>
            }
          </>
        }
        </div>
      </div>
    
    }
    </section>
  );
}

export default PodcastDetailPage;