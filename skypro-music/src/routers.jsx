import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Favorites } from "./pages/Favorites";
import { CategorySongs } from "./pages/categorySongs";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./protected-routes/protectedRoutes";
import React from "react";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/register";

export const AppRoutes = ({user, setUser, loading, tracks, tracksError, currentTrack, setCurrentTrack}) => {

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
      <Route path="/" element={<Main user={user} setUser={setUser} loading={loading} tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}> </Main>} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/categorySongs/:id" element={<CategorySongs/>}/>
      </Route>
      <Route path="/login" element={<LogIn user={user} setUser={setUser}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
//<LogIn user={user} setUser={setUser}/>