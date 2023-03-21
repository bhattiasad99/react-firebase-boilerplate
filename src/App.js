import React from "react";
import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routing/ApplicationRoutes";
import Snackbar from "./SnackbarProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Snackbar>
        <ApplicationRoutes />
      </Snackbar>
    </BrowserRouter>
  );
};

export default App;
