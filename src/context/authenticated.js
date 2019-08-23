import React, { useState, createContext, useContext, useEffect, useCallback } from 'react';
import useReactRouter from 'use-react-router';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const mockupUserData = {
  username: 'admin',
  name: 'bom',
  token: '1234',
  roles: 'admin'
};

const AuthProvider = ({ children }) => {
  console.log('Render AuthProvider');
  const [user, setUser] = useState(null);
  // const [userLoaded, setUserLoaded] = useState(false);
  const { history } = useReactRouter();

  useEffect(() => {
    console.log('Render AuthProvider useEffect', user);
  }, [user]);

  const isPassAuth = (isPass, userData) => {
    if (isPass) {
      localStorage.setItem('userInformation', JSON.stringify(userData));
      console.log('authByUserAndPass', userData);
      setUser(userData);
      // alert success & redirect
    } else {
      localStorage.removeItem('userInformation');
      setUser(null);
      // alert error & clear button disabled
    }
  };


  const authByUserAndPass = (user, pass) => {
    const userData = { ...mockupUserData };
    const isPass = user === userData.username && pass === userData.token;
    isPassAuth(isPass, userData);
    return isPass;
  };

  const logout = () => {
    localStorage.removeItem('userInformation');
    setUser(null);
    history.push('/login');
  };

  const authByToken = useCallback(token => {
    // const userData = `callApi(${token})` // call api
    // call api for recheck token correct
    // if yes set data in localstorage & setNewState
    // else dont do anything
    const userData = { ...mockupUserData };
    const isPass = token === userData.token;

    isPassAuth(isPass, userData);
    return isPass;
  }, []);

  useEffect(() => {
    const { token, ...rest } = JSON.parse(localStorage.getItem('userInformation')) || {};
    console.log('userFromLocalStorage', token, rest);
    if (token) authByToken(token);
  }, [authByToken]);

  // const authByToken = ;

  return (
    <AuthContext.Provider
      value={{
        user,
        // userLoaded,
        // setUser,
        // setUserLoaded,
        logout,
        authByToken,
        authByUserAndPass
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
