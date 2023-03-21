import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login, NotFound } from "./../components/pages";
// import Dashboard from "../components/pages/Dashboard/Dashboard";
import ProtectedRouting from "./ProtectedRouting";
// import Login from "../components/pages/Login/Login";
import { useSelector } from "react-redux";

const ApplicationRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Routes>
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />
      {/* protected routes */}
      <Route path="/" element={<ProtectedRouting />}>
        {/* default */}
        <Route path="" element={<Navigate to="dashboard" />} />
        {/* pages */}
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ApplicationRoutes;
