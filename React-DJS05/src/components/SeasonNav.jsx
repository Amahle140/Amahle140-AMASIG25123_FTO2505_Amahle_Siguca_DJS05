
import { useState } from "react";
import EpisodeCard from "./EpisodeCard";

/**
 * SeasonNav component
 * Props:
 *  - seasons: Array of season objects { id, title, episodes: [] }
 */
export default function SeasonNav({ seasons }) {
  const [openSeason, setOpenSeason] = useState(null);

  if (!seasons || seasons.length === 0) {
    return <p>No seasons available.</p>;
  }

  return (
    <div>
      {seasons.map((s, idx) => (
        <section key={s.id || idx} style={{border:'1px solid #ddd', marginBottom:8, borderRadius:6, overflow:'hidden'}}>
          <button
            onClick={() => setOpenSeason(openSeason === idx ? null : idx)}
            style={{width:'100%', textAlign:'left', padding:12, background:'#f7f7f7', border:0, cursor:'pointer'}}
            aria-expanded={openSeason === idx}
          >
            <strong>{s.title || `Season ${idx + 1}`}</strong> — {s.episodes?.length || 0} episodes
          </button>

          {openSeason === idx && (
            <div style={{padding:12}}>
              {s.episodes && s.episodes.length > 0 ? (
                s.episodes.map((ep, i) => (
                  <EpisodeCard key={ep.id || i} episode={ep} number={i+1} />
                ))
              ) : (
                <p>No episodes in this season.</p>
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
