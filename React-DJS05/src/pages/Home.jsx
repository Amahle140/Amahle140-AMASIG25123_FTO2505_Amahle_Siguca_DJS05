import React, {useEffect, useState} from "react";
import { fetchPreviews } from "../api";
import ShowCard from "../components/ShowCard";

/**
 * Home page - shows list of previews with simple search and genre filter.
 */
export default function Home() {
  const [shows, setShows] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [q, setQ] = useState('');
  const [genre, setGenre] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    setLoading(true);
    fetchPreviews().then(data=>{
      setShows(data);
      setLoading(false);
    }).catch(err=>{
      setError(err.message);
      setLoading(false);
    });
  },[]);

  useEffect(()=> {
    const low = q.toLowerCase();
    setFiltered(shows.filter(s=>{
      const matchesQ = !q || (s.title && s.title.toLowerCase().includes(low)) || (s.description && s.description.toLowerCase().includes(low));
      const matchesGenre = genre==='all' || (s.genres && s.genres.includes(Number(genre)));
      return matchesQ && matchesGenre;
    }));
  },[q,genre,shows]);

  if (loading) return <div className="center">Loading shows…</div>;
  if (error) return <div className="center error">Error: {error}</div>;
  if (!shows.length) return <div className="center">No shows available.</div>;

  // derive simple genre list from previews
  const genreSet = new Set();
  shows.forEach(s => (s.genres || []).forEach(g => genreSet.add(g)));
  const genres = Array.from(genreSet).sort((a,b)=>a-b);

  return (
    <div className="page home">
      <header className="home-controls">
        <input aria-label="search" placeholder="Search shows" value={q} onChange={e=>setQ(e.target.value)} />
        <select value={genre} onChange={e=>setGenre(e.target.value)}>
          <option value="all">All genres</option>
          {genres.map(g=> <option key={g} value={g}>Genre {g}</option>)}
        </select>
      </header>

      <main className="grid">
        {filtered.map(show => <ShowCard key={show.id} show={show} />)}
      </main>
    </div>
  );
}
