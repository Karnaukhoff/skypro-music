import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Favorites } from "./pages/Favorites";
import { CategorySongs } from "./pages/categorySongs";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./protected-routes/protectedRoutes";
//import React, { useState } from "react";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/register";

export const AppRoutes = ({user}) => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main/>}/>
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/categorySongs/:id" element={<CategorySongs/>}/>
      </Route>
    </Routes>
  );
};
