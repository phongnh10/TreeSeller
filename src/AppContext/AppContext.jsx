import React, {Children, createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [userSave, setUserSave] = useState({});
  const [order, setOrder] = useState([]);

  return (
    <AppContext.Provider value={{userSave, setUserSave, order, setOrder}}>
      {children}
    </AppContext.Provider>
  );
};
