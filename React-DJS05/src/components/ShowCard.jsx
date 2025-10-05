function ShowCard({ show, onSelectShow }) {
  return (
    <div className="show-card">
      <img src={show.image} alt={show.title} />
      <h3>{show.title}</h3>
      <p>{show.description.slice(0, 80)}...</p>
      <button onClick={() => onSelectShow(show.id)}>View Details</button>
    </div>
  );
}

export default ShowCard;
