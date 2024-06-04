import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App.js";
import { getAllPodcasts } from "../../services/axiosService.js";
import PodcastCard from "../../components/ui/PodcastCard";
import PodcastLoading from "../../components/ui/PodcastLoading.jsx";

function HomePage(props) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  const podcastsData = localStorage.getItem("podcasts") ? JSON.parse(localStorage.getItem("podcasts")) : null;

  const { allPodcasts, 
    setAllPodcasts,
    setAllPodcastsLastUpdate, 
    allPodcastsAreLoading, 
    setAllPodcastsAreLoading,
    allPodcastsError,
    setAllPodcastsError,
    setOnePodcast,
    setOnePodcastLastUpdate,
    fakeLoading, 
    setFakeLoading
  } = useContext(AppContext);

  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      if (!allPodcastsAreLoading) {
        setAllPodcastsAreLoading(true);
        setAllPodcastsError(false);
        await getAllPodcasts()
        .then((response) => {
          setAllPodcasts(JSON.parse(response.data.contents).feed.entry);
          localStorage.setItem("podcasts", JSON.stringify({ timestamp: Date.now(), data: JSON.parse(response.data.contents).feed.entry }));
        })
        .catch((error) => {
          setAllPodcastsError(true);
          console.error(error)
        })
        .finally(() => setAllPodcastsAreLoading(false))
      }
    }
    if (!podcastsData?.data?.length || podcastsData?.timestamp + 86400000 < Date.now()) {
      fetchData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (searchInput !== "") {
      var placeToSearch = allPodcasts;
      var lowerSearchInput = searchInput.toLowerCase();
      var results = [];
      if (placeToSearch) {
        for (let i = 0; i < placeToSearch.length; i++) {
          var compareWith = placeToSearch[i]["im:name"].label.toLowerCase();
          if (compareWith.includes(lowerSearchInput)) {
            results.push(placeToSearch[i]);
          }
        }
      }
      setFilteredPodcasts(results);
    } else {
      setFilteredPodcasts(allPodcasts);
    }
  }, [searchInput, allPodcasts]);

  useEffect(() => {
    setOnePodcast([]);
    setOnePodcastLastUpdate(null);
    setFakeLoading(true);
    setAllPodcasts(podcastsData?.data ? podcastsData?.data : []);
    setAllPodcastsLastUpdate(podcastsData?.timestamp ? podcastsData?.timestamp : null);
    setTimeout(() => {
      setFakeLoading(false);
    }, 500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="home-section" className="home-section d-flex flex-column justify-content-center align-items-center">
    { allPodcastsAreLoading || fakeLoading ?
      <div className="home-podcast cards-container d-flex flex-wrap justify-content-center align-items-center">
        <PodcastLoading/>
        <PodcastLoading/>
        <PodcastLoading/>
      </div>
      :
      allPodcastsError ?
      <h3>{t('home.error')}</h3>
      :
      <div className="home-podcast d-flex flex-column justify-content-center align-items-center">
        <div className="podcast-input-container d-flex flex-row justify-content-center justify-content-lg-end align-items-center">
          <div className="podcast-input-left d-flex flex-row  justify-content-center justify-content-lg-end align-items-center">
            <div className="podcast-input-counter d-flex flex-row justify-content-center align-items-center">
              { filteredPodcasts.length }
            </div>
            <input 
              type="text" 
              placeholder={ t('home.filter') } 
              aria-label={ t('home.filter') } 
              aria-describedby="basic-addon1"
              onChange={ (e) => handleChange(e) } 
              value={ searchInput }
            />
          </div>
        </div>
        <div className="cards-container d-flex flex-wrap justify-content-center align-items-start">
          {
            !filteredPodcasts.length && searchInput ? 
            <h3>{t('home.noResults')}</h3>
            :
            filteredPodcasts.map((item) => {
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

export default HomePage;