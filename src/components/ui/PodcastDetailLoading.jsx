import React from 'react';

export default function PodcastDetailLoading({ item, description }) {

  return (
    <div className={`detail-card-item detail-card-item-loading d-flex flex-column justify-content-center align-items-center`}>
      <div className="skeleton"></div>
      <hr></hr>
      <div className={`detail-card-item-name d-flex flex-column`}>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
      </div>
      <hr></hr>
      <div className={`detail-card-item-description d-flex flex-column`}>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
      </div>
    </div>
  )

}