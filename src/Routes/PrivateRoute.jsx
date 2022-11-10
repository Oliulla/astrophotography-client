import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SpinnerAnimation from "../components/SpinnerAnimation/SpinnerAnimation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <SpinnerAnimation />;
  }

  if (user?.uid) {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
