import React, { useEffect, useState } from "react";
import SeasonAccordion from "../components/SeasonAccordion";
import "../index.css";

const ShowDetail = ({ podcast, onBack }) => {
  const [showData, setShowData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!podcast) return;

    fetch(`https://podcast-api.netlify.app/id/${podcast.id}`)
      .then((res) => res.json())
      .then((data) => {
        setShowData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load show details.");
        setLoading(false);
      });
  }, [podcast]);

  if (loading) return <p>Loading show details...</p>;
  if (error) return <p>{error}</p>;
  if (!showData) return <p>No show data found.</p>;

  return (
    <div className="show-detail">
      {/* Back button */}
      <button onClick={onBack} style={{ marginBottom: "15px" }}>
        ← Back to Home
      </button>

      {/* Show Header */}
      <div className="show-header">
        <img src={showData.image} alt={showData.title} />
        <div className="show-info">
          <h2>{showData.title}</h2>
          <p>{showData.description}</p>

          <div className="genre-tags">
            {showData.genres.map((genreId) => (
              <span key={genreId}>Genre {genreId}</span>
            ))}
          </div>

          <p className="show-meta">Last updated: {showData.updated}</p>
        </div>
      </div>

      {/* Season Accordion */}
      {showData.seasons && showData.seasons.length > 0 ? (
        <SeasonAccordion seasons={showData.seasons} />
      ) : (
        <p>No seasons available for this show.</p>
      )}
    </div>
  );
};

export default ShowDetail;

