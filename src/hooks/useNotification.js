import { useSnackbar } from "notistack";
import { ALLOWED_SNACKBAR_VARIANTS } from "../config/constants";

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showNotification = (message, variant) => {
    if (typeof message !== "string") {
      throw new Error(`Invalid message! Must be of type string`);
    }

    if (variant && !ALLOWED_SNACKBAR_VARIANTS.includes(variant)) {
      throw new Error(
        `Invalid variant! Must be among: ${ALLOWED_SNACKBAR_VARIANTS.join(
          " | "
        )}`
      );
    }
    enqueueSnackbar(message, {
      variant,
    });
  };
  return { showNotification };
};

export { useNotification };
