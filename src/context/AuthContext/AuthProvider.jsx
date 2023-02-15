import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext();
const { Provider } = authContext;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const handleLogIn = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  };

  return (
    <Provider value={{
      token,
      handleLogOut,
      handleLogIn,
    }}
    >
      {children}
    </Provider>
  );
};
