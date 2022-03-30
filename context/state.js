import { createContext, useContext , useState} from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isRegisterVisible, setisRegisterVisible] = useState(false)

  return (
    <AppContext.Provider value={{state:{
        isRegisterVisible,
        setisRegisterVisible
    }}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}