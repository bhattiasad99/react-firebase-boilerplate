import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { SUCCESS } from "../../../config/constants";
import { authActions } from "../../../store/auth";
import ResponsiveAppBar from "../organisms/Appbar/Appbar";
import { useNotification } from "./../../../hooks/useNotification";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  return (
    <>
      <ResponsiveAppBar
        logoutHandler={(e) => {
          dispatch(authActions.logout());
          showNotification("Logged out!", SUCCESS);
        }}
      >
        <Outlet />
      </ResponsiveAppBar>
    </>
  );
};

export default MainLayout;
