import React, { Children } from "react";
import { useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return Children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace="true"></Navigate>
  );
};

export default PrivateRoute;
