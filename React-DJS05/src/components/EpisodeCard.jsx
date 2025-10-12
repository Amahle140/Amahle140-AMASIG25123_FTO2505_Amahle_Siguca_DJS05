/**
 * EpisodeCard - small presentation component for an episode
 * Props:
 *  - episode: { title, description, image }
 *  - number: numeric episode number
 */
export default function EpisodeCard({ episode, number }) {
  const shortDesc = episode.description
    ? (episode.description.length > 140 ? episode.description.slice(0,140) + '…' : episode.description)
    : "No description.";

  return (
    <article style={{display:'flex', gap:12, marginBottom:12, alignItems:'flex-start'}}>
      {episode.image && <img src={episode.image} alt={episode.title} style={{width:100,height:56,objectFit:'cover',borderRadius:6}} />}
      <div>
        <div style={{fontSize:14, color:'#666'}}>Episode {number}</div>
        <div style={{fontWeight:700}}>{episode.title || 'Untitled'}</div>
        <div style={{fontSize:13, color:'#333'}}>{shortDesc}</div>
      </div>
    </article>
  );
}
