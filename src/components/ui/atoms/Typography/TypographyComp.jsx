import { Typography } from "@mui/material";
import React from "react";

const TypographyComp = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default TypographyComp;
