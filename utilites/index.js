import get from "lodash/get";
import Notification from "../components/Notification";

export const handleApiError = (res) => {
  // const { status, statusText } = get(res, "data", {
  //   status: status || 500,
  //   statusText: statusText || "Try again after sometime",
  // });

  switch (res?.status) {
    //response status code
    case 400:
      Notification("error", "Error", res.data?.errors[0]?.message);
      break;
    default:
      Notification("error", "Server Error", "Try again after sometime");
  }
};
