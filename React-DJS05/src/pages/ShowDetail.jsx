
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchShowById } from "../api/fetchShowById";
import SeasonNav from "../components/SeasonNav";
import { formatDate } from "../utils/formatDate";
import styles from "../App.module.css";

/**
 * ShowDetail page - displays detailed info for a single show.
 * Preserves search/filter state via location.search when navigating back.
 */
export default function ShowDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchShowById(id)
      .then((data) => {
        if (!mounted) return;
        if (!data) {
          setError("Show not found.");
          setShow(null);
        } else {
          setShow(data);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch show data.");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => (mounted = false);
  }, [id]);

  function handleBack() {
    // preserve previous query string (filters/search/pagination) if present
    const qs = location.state?.fromSearch || location.search || "";
    navigate("/" + (qs ? `?${qs.replace(/^\?/, "")}` : ""));
  }

  if (loading) return <main className={styles.main}><p>Loading show details…</p></main>;
  if (error) return <main className={styles.main}><p>Error: {error}</p><button onClick={handleBack}>Back</button></main>;
  if (!show) return <main className={styles.main}><p>Show not found.</p><button onClick={handleBack}>Back</button></main>;

  return (
    <main className={styles.main}>
      <button onClick={handleBack} style={{marginBottom:16}}>← Back to results</button>
      <h1>{show.title}</h1>
      <img src={show.image} alt={show.title} style={{maxWidth:400,width:'100%'}} />
      <p><strong>Updated:</strong> {formatDate(show.updated)}</p>
      <div style={{marginTop:12}}>
        {show.description ? <p>{show.description}</p> : <p>No description available.</p>}
      </div>

      <div style={{marginTop:24}}>
        <h2>Seasons</h2>
        <SeasonNav seasons={show.seasons || []} />
      </div>
    </main>
  );
}
