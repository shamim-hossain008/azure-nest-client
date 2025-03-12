import React from "react";
import { useLocation } from "react-router";
import SpinnerLoader from "../../Components/SpinnerLoader";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <SpinnerLoader />;

  if (user?.email) {
    return children;
  }

  return (
    <Navigate to="/login" state={location.pathname} replace="true"></Navigate>
  );
};

export default PrivateRoute;
