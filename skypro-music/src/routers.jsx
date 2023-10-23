import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Favorites" element={<Favorites />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
