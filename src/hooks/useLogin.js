import { useDispatch } from "react-redux";
import { ERROR, SUCCESS } from "../config/constants";
import { login } from "../services";
import { authActions } from "../store/auth";
import { useNotification } from "./useNotification";
const useLogin = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const handleLogin = (userName, password) => {
    login({ userName, password }).then((res) => {
      if (res.error) {
        return showNotification(res.message, ERROR);
      }

      dispatch(authActions.login());
      showNotification("Logged in successfully!", SUCCESS);
    });
  };

  return {
    handleLogin,
  };
};

export { useLogin };
