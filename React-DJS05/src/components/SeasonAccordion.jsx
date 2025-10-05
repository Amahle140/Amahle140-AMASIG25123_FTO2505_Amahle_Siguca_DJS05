import React, { useState } from "react";
import { shorten } from "../utils";

/**
 * SeasonAccordion
 * Props:
 *  - seasons: array of season objects
 */
export default function SeasonAccordion({ seasons }) {
  const [openSeason, setOpenSeason] = useState(null);

  if (!seasons || seasons.length === 0) return <p>No seasons available.</p>;

  const toggleSeason = (index) => {
    setOpenSeason(openSeason === index ? null : index);
  };

  return (
    <div className="season-accordion">
      {seasons.map((season, index) => (
        <div key={season.id} className="season">
          <button
            className="season-toggle"
            onClick={() => toggleSeason(index)}
          >
            <strong>{season.title || `Season ${season.season_number || 1}`}</strong> — {season.episodes?.length || 0} episodes
            <span className="chev">{openSeason === index ? "▲" : "▼"}</span>
          </button>

          {openSeason === index && season.episodes && season.episodes.length > 0 && (
            <ul className="episode-list">
              {season.episodes.map((ep, idx) => (
                <li key={ep.id || idx} className="episode">
                  <div className="ep-num">
                    S{season.season_number || 1}E{ep.episode_number || idx + 1}
                  </div>
                  <img src={ep.image || season.image} alt={ep.title} className="ep-thumb" />
                  <div className="ep-info">
                    <div className="ep-title">{ep.title}</div>
                    <div className="ep-desc">{shorten(ep.description, 120)}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
