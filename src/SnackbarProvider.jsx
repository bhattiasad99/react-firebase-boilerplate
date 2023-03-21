import React from "react";
import { SnackbarProvider } from "notistack";
import { styled } from "@mui/material/styles";
// import { Colors } from './../../config/palette.js'

const StyledSnackBar = styled(SnackbarProvider)(({ theme }) => ({
  "&.SnackbarItem-variantSuccess": {
    backgroundColor: "green",
  },
  "&.SnackbarItem-variantWarning": {
    backgroundColor: "yellow",
  },
  "&.SnackbarItem-variantInfo": {
    backgroundColor: "blue",
  },
  "&.SnackbarItem-variantError": {
    backgroundColor: "red",
  },
}));

const Snackbar = ({ children, ...props }) => {
  return (
    <StyledSnackBar
      autoHideDuration={1500}
      preventDuplicate={true}
      maxSnack={3}
      {...props}
    >
      {children}
    </StyledSnackBar>
  );
};

export default Snackbar;
