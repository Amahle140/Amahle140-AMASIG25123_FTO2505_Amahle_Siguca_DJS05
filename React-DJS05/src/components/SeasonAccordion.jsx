import React, {useState} from "react";
import {shorten} from "../utils";

/**
 * SeasonAccordion
 * Props: season (object with episodes array), initiallyOpen (bool)
 */
export default function SeasonAccordion({season, initiallyOpen=false}) {
  const [open, setOpen] = useState(initiallyOpen);
  if (!season) return null;
  return (
    <div className="season">
      <button className="season-toggle" onClick={()=>setOpen(s => !s)}>
        <strong>{season.title}</strong> — {season.episodes?.length || 0} episodes
        <span className="chev">{open ? "▲":"▼"}</span>
      </button>
      {open && (
        <ul className="episode-list">
          {season.episodes.map((ep, idx) => (
            <li key={ep.id || idx} className="episode">
              <div className="ep-num">S{season.season_number || 1}E{ep.episode_number || idx+1}</div>
              <img src={ep.image || season.image} alt={ep.title} className="ep-thumb" />
              <div className="ep-info">
                <div className="ep-title">{ep.title}</div>
                <div className="ep-desc">{shorten(ep.description,120)}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
