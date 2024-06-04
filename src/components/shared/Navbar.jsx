import React from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

export default function Navbar() {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  var navigate = useNavigate();

  const handleToHome = () => {
    navigate(routes.home);
  }

  return (
    <header id="navbar-section" className="navbar-container d-flex flex-column justify-content-center align-items-between">
      <div className="navbar-container-top d-flex flex-row align-items-center">
        <div className="navbar-container-left d-flex flex-row align-items-center">
          <h1 onClick={ handleToHome } className="as-a-button">Podcaster</h1>
        </div>
        <div className="navbar-container-right d-flex flex-row align-items-center">
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