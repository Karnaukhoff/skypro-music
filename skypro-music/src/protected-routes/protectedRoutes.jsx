import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ /*redirectPath = "/login", */isAllowed }) => {
  if (isAllowed === null) {
    console.log("isAllowed ? -> ", isAllowed)
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
};