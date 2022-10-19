import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext(null);

const ContextProvider = (props) => {
  // Set the state in local storage
  let intialTheme = 'dark';
  if (typeof window !== 'undefined') {
    localStorage.removeItem('theme');
    intialTheme = JSON.parse(localStorage.getItem('theme')) || 'dark';
  }

  // state for theme
  const [theme, setTheme] = useState(intialTheme);

  // update local storage on modification
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  // export all functions, data, and components wrapped in context
  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
