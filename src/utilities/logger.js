import { ALLOWED_CONSOLE_VARIANTS } from "../config/constants";
import responseMessages from "./responseMessages.json";

export const logMessage = (code, variant, data) => {
  if (variant && !ALLOWED_CONSOLE_VARIANTS.includes(variant)) {
    throw new Error("INVALID PARAMS!");
  }

  if (!variant) {
    return console.log(responseMessages[code], data);
  } else {
    return console[variant](responseMessages[code], data);
  }
};
