import React from "react";

const PodcastCard = ({ podcast, onSelect }) => {
  return (
    <div className="podcast-card" onClick={() => onSelect(podcast)}>
      <img
        src={podcast.image}
        alt={podcast.title}
        className="podcast-card-image"
      />
      <div className="podcast-card-content">
        <h3>{podcast.title}</h3>
        <p>{podcast.genres.join(", ")}</p>
        <p>{podcast.seasons} seasons</p>
        <p>Updated {podcast.updated}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
