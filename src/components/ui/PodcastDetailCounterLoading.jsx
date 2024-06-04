import React from 'react';
import { useTranslation } from "react-i18next";

export default function PodcastDetailCounterLoading({ item }) {

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <div className="podcast-detail-container-right-top podcast-detail-container-right-top-loading skeleton"></div>
  )

}