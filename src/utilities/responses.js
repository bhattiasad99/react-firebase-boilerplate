import { ERROR } from "../config/constants";
import { logMessage } from "./logger";
import responseMessages from "./responseMessages.json";

export const success = (data) => {
  return {
    data,
    error: false,
  };
};

export const failure = (data, code, message) => {
  logMessage(code, ERROR, {
    data,
  });
  return {
    message: message ? message : responseMessages[code],
    responseMessage: responseMessages[code],
    code,
    data,
    error: true,
  };
};
