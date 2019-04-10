import React, { useState, createContext } from 'react';

import en from './language/en.json';
import th from './language/en.json';

export const TranslateContext = createContext();

const languages = {
  en,
  th
};

const TranslateProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const changeLanguage = lang => {
    if (languages[lang]) setCurrentLanguage(lang);
  };
  const translate = (key) => {

  };
  return (
    <TranslateContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        getAllLanguage: key => translate(key),
        t: () => null
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
