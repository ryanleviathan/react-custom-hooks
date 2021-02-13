import React, { useState, useContext, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider> 
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    theme,
    setTheme
  );
};