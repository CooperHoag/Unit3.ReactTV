import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails"; 

/** Allows users to browse through the episodes of the given show */
// step 1 - <ShowDetails> takes `show` as a prop
export default function ShowDetails({ show }) {
  // step 2 - <ShowDetails> keeps the selected episode in a state variable
  const [selectedEpisode, setSelectedEpisode] = useState();
  
  // step 3 - show message if no show is selected
  if (!show) {
    return (
      <p>Select a show to see episodes!</p>
    );
  }

  // step 4 - (README)
  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <p>Genre: {show.genre}</p>
      <EpisodeList 
      name={show.name}
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode}/>
    </div>
  );
}