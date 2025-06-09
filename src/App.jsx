import React, { useState } from "react";
import ShowDetails from "./shows/ShowDetails.jsx";
import { tvShows } from "./shows/data.js";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(tvShows[0]);
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
