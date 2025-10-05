import React, {useEffect, useState} from "react";
import {useParams, Link, useLocation, useNavigate} from "react-router-dom";
import { fetchShowById } from "../api";
import SeasonAccordion from "../components/SeasonAccordion";
import { GENRE_MAP, formatDate } from "../utils";

/**
 * ShowDetail - fetches a show by id from route
 */
export default function ShowDetail(){
  const { id } = useParams();
  const loc = useLocation();
  const nav = useNavigate();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    fetchShowById(id).then(data=>{
      setShow(data);
      setLoading(false);
    }).catch(err=>{
      setError(err.message);
      setLoading(false);
    });
  },[id]);

  return (
    <div className="page detail">
      <div className="back">
        <button onClick={()=> nav(-1)}>← Back</button>
        <Link to={"/"+loc.search}>Home</Link>
      </div>

      {loading && <div className="center">Loading show…</div>}
      {error && <div className="center error">Error: {error}</div>}
      {!loading && !show && <div className="center">Show not found.</div>}

      {show && (
        <article className="show-detail">
          <div className="hero">
            <img src={show.image} alt={show.title} />
            <div className="hero-meta">
              <h1>{show.title}</h1>
              <div className="tags">{(show.genres||[]).map(g=> <span key={g} className="tag">{GENRE_MAP[g]}</span>)}</div>
              <p className="lastup">Last updated: {formatDate(show.last_updated)}</p>
              <p className="desc" dangerouslySetInnerHTML={{__html: show.description}} />
            </div>
          </div>

          <section className="seasons">
            <h2>Seasons</h2>
            {show.seasons && show.seasons.length ? (
              show.seasons.map((s, i) => <SeasonAccordion key={s.id||i} season={s} initiallyOpen={i===0} />)
            ) : <div>No seasons available.</div>}
          </section>
        </article>
      )}
    </div>
  );
}
