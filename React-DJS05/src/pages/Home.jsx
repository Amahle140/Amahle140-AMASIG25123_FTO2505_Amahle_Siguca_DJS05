import React, { useEffect, useState } from "react";
import PodcastCard from "../components/PodcastCard";
import "../index.css";

const Home = ({ onSelectPodcast }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/")
      .then((res) => res.json())
      .then((data) => {
        setPodcasts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load podcasts.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading podcasts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Podcast App</h1>
      <div className="grid">
        {podcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            podcast={{
              id: podcast.id,
              title: podcast.title,
              image: podcast.image,
              genres: podcast.genres || [],
              seasons: podcast.seasons || 0,
              updated: podcast.updated,
            }}
            onSelect={onSelectPodcast}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
