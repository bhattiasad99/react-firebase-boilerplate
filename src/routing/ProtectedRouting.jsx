import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MainLayout from "../components/ui/layouts/MainLayout";

const ProtectedRouting = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <MainLayout /> : <Navigate to="/login" />;
};

export default ProtectedRouting;
