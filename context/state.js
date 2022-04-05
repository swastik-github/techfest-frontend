import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { handleApiError } from "../utilites";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isRegisterVisible, setisRegisterVisible] = useState(false);
  const [eventList, setEventList] = useState([]);
  useEffect(async () => {
    let response;
    try {
      response = await axios.get(
        `${process.env.NEXT_PUBLIC_FETCH_API}/v1/events`
      );
    } catch (err) {
      handleApiError(err.response);
    }

    setEventList(response?.data?.competitions);
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: {
          isRegisterVisible,
          setisRegisterVisible,
          eventList,
          setEventList,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
