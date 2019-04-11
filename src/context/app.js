import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const initialState = {
  appname: 'web-starter-kit'
};
const AppProvider = ({ children }) => {
  const [allState, setAllState] = useState(initialState);

  const setNewState = newState => {
    // newState example --> appData: { status: 'success', data: 'appData' }
    setAllState({
      ...allState,
      ...newState
    });
  };
  const values = {
    // data insert here
    ...allState,
    setNewState
    //
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
