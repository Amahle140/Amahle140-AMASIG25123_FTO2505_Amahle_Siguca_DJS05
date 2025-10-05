import React, { useState } from "react";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import "./index.css";

function App() {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const handleSelectPodcast = (podcast) => {
    setSelectedPodcast(podcast);
  };

  const handleBackToHome = () => {
    setSelectedPodcast(null);
  };

  return (
    <div>
      {!selectedPodcast ? (
        <Home onSelectPodcast={handleSelectPodcast} />
      ) : (
        <ShowDetail podcast={selectedPodcast} onBack={handleBackToHome} />
      )}
    </div>
  );
}

export default App;
