import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isRegisterVisible, setisRegisterVisible] = useState(false);
  const [eventList, setEventList] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:8000/v1/events");
    console.log(response.data.competitions);
    setEventList(response.data.competitions);
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
