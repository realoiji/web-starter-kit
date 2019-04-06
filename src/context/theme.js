import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [number, setNumber] = useState(22);
  const increaseNumber = num => setNumber(number + num);
  const decreaseNumber = num => setNumber(number - num);
  return (
    <ThemeContext.Provider
      value={{
        value: number,
        increaseNumber,
        decreaseNumber
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
