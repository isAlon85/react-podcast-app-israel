import React from 'react';
import { useTranslation } from "react-i18next";

export default function PodcastDetailCounter({ item }) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <div className="podcast-detail-container-right-top d-flex flex-column justify-content-center align-items-start">
      {`${t('podcastDetail.episodes')}: ${item[0]?.trackCount}`}
    </div>
  )

}