import React from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function PodcastDetail({ item }) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  return (
    <div onClick={ () => navigate(`/podcast/${item[0]?.collectionId}`) }
      className={`detail-card-item as-a-button d-flex flex-column justify-content-center align-items-center`}
    >
      <img src={ item[0]?.artworkUrl600 } alt={`card-item-`} className=""/>
      <hr></hr>
      <div className={`detail-card-item-name d-flex flex-column`}>
        <h3>{ item[0]?.collectionName }</h3>
        <h4>{ `${t('podcastDetail.by')}: ${item[0]?.artistName}` }</h4>
      </div>
      <hr></hr>
      <div className={`detail-card-item-description d-flex flex-column`}>
        <h3>{ `${t('podcastDetail.description')}:` }</h3>
        <p>{ `${item[0]?.collectionName}` }</p>
      </div>
    </div>
  )

}