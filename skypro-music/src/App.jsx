import { AppRoutes } from "./routers";
import { createGlobalStyle } from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { getAllTracks } from "./api/api";
import Context from "./context";
//import { setUserData, setRefresh, setAccess } from "./store/slices/authSlice";
//import {/* useDispatch,*/ useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  console.log(user)
  const [tracks, setTracks] = useState([]);
  const [loading, setloading] = useState(false);
  const [tracksError, setTracksError] = useState(null);
  const [isPlaylist, setPlaylist] = useState();

  useEffect(() => {
    async function Tracks() {
      try {
        setloading(true);
        setTracksError(null);
        await getAllTracks().then((tracks) => {
          setTracks(tracks);
        });
      } catch (error) {
        setTracksError(error.message);
      } finally {
        setloading(false);
      }
    }
    Tracks();
  }, []);

  return (
    <>
      <Context.Provider value={{ user, setUser, loading, tracks, tracksError, isPlaylist, setPlaylist }}>
        <GlobalStyle />
        <AppRoutes />
      </Context.Provider>
    </>
  );
}

export default App;
