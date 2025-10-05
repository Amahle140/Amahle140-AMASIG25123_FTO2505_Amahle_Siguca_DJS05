import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GENRE_MAP } from "../utils";

/**
 * ShowCard - small preview card for list
 */
export default function ShowCard({ show }) {
  const loc = useLocation();
  const genreTitles = (show.genres || []).map(id => GENRE_MAP[id]).filter(Boolean);
  return (
    <div className="show-card">
      <img src={show.image} alt={show.title} className="show-thumb" />
      <div className="show-meta">
        <h3>{show.title}</h3>
        <p className="small">{shortText(show.description)}</p>
        <div className="tags">
          {genreTitles.map(g => <span key={g} className="tag">{g}</span>)}
        </div>
        <Link to={`/show/${show.id}${loc.search}`} className="btn">View details</Link>
      </div>
    </div>
  );
}

function shortText(t){ return t ? (t.length>120 ? t.slice(0,117)+'…' : t) : ''; }
