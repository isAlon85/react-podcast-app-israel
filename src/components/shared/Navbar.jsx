import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from "../../App.js";
import routes from '../../routes/routes';

export default function Navbar() {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  var navigate = useNavigate();
  var location = useLocation().pathname;
  
  const {  
    allPodcastsAreLoading, 
    onePodcastIsLoading, 
  } = useContext(AppContext);

  const [spinner, setSpinner] = useState(true);

  const handleToHome = () => {
    navigate(routes.home);
  }

  useEffect(() => {
    setSpinner(true);
    if (!allPodcastsAreLoading && !onePodcastIsLoading) {
      setTimeout(() => {
        setSpinner(false);
      }, 500);
    }
  }, [location, allPodcastsAreLoading, onePodcastIsLoading])
  
  return (
    <header id="navbar-section" className="navbar-container d-flex flex-column justify-content-center align-items-between">
      <div className="navbar-container-top d-flex flex-row justify-content-between align-items-center">
        <div className="navbar-container-left d-flex flex-row align-items-center">
          <h1 onClick={ handleToHome } className="as-a-button">Podcaster</h1>
        </div>
        <div className="navbar-container-right d-flex flex-row align-items-center">
          { spinner ?
            <div className="spinner-border" role="status"></div>
            : null
          }
        </div>
      </div>
      <hr></hr>
      <div className="navbar-container-bottom d-flex flex-row align-items-center">
        <p>
          <span className="as-a-button" onClick={ () => i18n.changeLanguage("en") }> 
            {t('languages.english')}
          </span> 
          {" | "}
          <span className="as-a-button" onClick={ () => i18n.changeLanguage("es") }>
            {t('languages.spanish')}
          </span>
        </p>
      </div>
    </header>
  )

}