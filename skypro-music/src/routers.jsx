import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Favorites } from "./pages/Favorites";
import { CategorySongs } from "./pages/categorySongs";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./protected-routes/protectedRoutes";
import React, { useState } from "react";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/register";

export const AppRoutes = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    
    localStorage.setItem('user', 'true')

    setUser({ login: "taradam" });
  }
  const handleLogout = () => {
    
    setUser(null);
  }
  return (
    <Routes>
        <Route path="/" element={<LogIn user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}/>} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          <Route path="/main" element={<Main/>}/>
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/categorySongs/:id" element={<CategorySongs/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    /*
      <Routes>
        <Route path="/" element={<Signin user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}/>} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/index" element={<Index />} />
        <Route path="/myplaylist" element={<MyPlayList />} />
        <Route path="/category/:id" element={<Category />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
        //my
      <Routes>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Main/>
          </ProtectedRoute>
        }
      />
        <Route path="/" element={<Main/>}/>
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/categorySongs/:id" element={<CategorySongs/>}/>
    </Routes>
    */
  );
};
