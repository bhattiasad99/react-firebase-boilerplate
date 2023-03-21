import { failure } from "./responses";
export const generateServerError = (err) => {
  return failure(
    {
      error: { ...err },
    },
    "00001"
  );
};
