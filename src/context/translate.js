import React, { createContext } from 'react';

export const TranslateContext = createContext();

const TranslateProvider = ({ children }) => {
  return (
    <TranslateContext.Provider
      value={{
        currentLanguage: 'th',
        getAllLanguage: () => null,
        t: () => null
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
