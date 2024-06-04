import React from 'react';

export default function PodcastLoading() {
  return (
    <div onClick={null} className={`card-item card-item-loading d-flex flex-column`}>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
    </div>
  )

}