import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Favorites } from "./pages/Favorites";
import { CategorySongs } from "./pages/categorySongs";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./protected-routes/protectedRoutes";
import React from "react";
import AuthPage from "./pages/LogIn"

export const AppRoutes = ({user, setUser, loading, tracks, tracksError, currentTrack, setCurrentTrack}) => {

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
      <Route path="/" element={<Main user={user} setUser={setUser} loading={loading} tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}> </Main>} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/categorySongs/:id" element={<CategorySongs/>}/>
      </Route>
      <Route
        path="/login"
        element={<AuthPage isLoginMode={true}></AuthPage>}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false}></AuthPage>}
      ></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};