import { TextField } from "@mui/material";
import React from "react";

const TextfieldComp = ({ variant, ...props }) => {
  return <TextField variant={variant} {...props} />;
};

TextfieldComp.defaultProps = {
  variant: "outlined",
};

export default TextfieldComp;
