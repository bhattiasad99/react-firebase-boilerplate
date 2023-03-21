// import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_INVALID_PASSWORD_ERROR } from "../config/constants";
import { failure, success } from "../utilities/responses";
import { generateServerError } from "../utilities/utility-functions";
// import { auth } from "../config/firebase.config";

export const login = async ({ userName, password }) => {
  try {
    // const response = await signInWithEmailAndPassword(auth, userName, password);
    return success({
      // response,
    });
  } catch (err) {
    if (err.code === FIREBASE_INVALID_PASSWORD_ERROR) {
      return failure(
        {
          error: { ...err },
        },
        "00002"
      );
    }
    return generateServerError(err);
  }
};
