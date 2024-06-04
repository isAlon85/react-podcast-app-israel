import React from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function PodcastCard({ podcast }) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  return (
    <div onClick={ () => navigate(`podcast/${podcast?.id?.attributes["im:id"]}`) }
      className={`card-item as-a-button d-flex flex-column`}
    >
      <img src={ podcast["im:image"][2]?.label } alt={`card-item-`} className=""/>
      <h3>{ podcast["im:name"]?.label }</h3>
      <h4>{ `${t('home.author')}: ${podcast["im:artist"]?.label}` }</h4>
    </div>
  )

}