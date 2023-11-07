import { AppRoutes } from "./routers";
import React from "react";
import { useState, useEffect } from "react";
import { getAllTracks } from "./api";

function App() {
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState (null);
  const [loading, setloading] = useState (false);
  const [tracksError, setTracksError] = useState(null)

  useEffect(() => {
  async function Tracks (){
  try {
    setloading (true)
    setTracksError(null)
    await getAllTracks().then((tracks) => {
    setTracks(tracks)
  })
  } catch(error) {
    setTracksError(error.message)
  } finally{
    setloading (false)
  }

  }
    Tracks ()
  }, [])
  return (
    <AppRoutes user={user} setUser={setUser} loading = {loading}  tracks = {tracks} setTracks = {setTracks}  tracksError={tracksError} setCurrentTrack = {setCurrentTrack} currentTrack={currentTrack}/>
  );
}

export default App;
