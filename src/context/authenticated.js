import React, { useState, createContext, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  console.log('Render AuthProvider');
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  const authByToken = (token) => {
    // const userData = `callApi(${token})` // call api
    // call api for recheck token correct
    // if yes set data in localstorage & setNewState
    // else dont do anything
    const userData = { username: 'admin', name: 'bom', token: '1234', roles: 'admin' };
    const isPass = token === userData.token;

    if (isPass) {
      localStorage.setItem('userInformation', JSON.stringify(userData));
      setUser(userData);
      // alert success & redirect
    } else {
      localStorage.removeItem('userInformation');
      // alert error & clear button disabled
    }
    return isPass;    
  }
  const authByUserAndPass = (user, pass) => {
    const userData = { username: 'admin', name: 'bom', token: '1234', roles: 'admin' };
    const isPass = user === userData.username && pass === userData.token;

    if (isPass) {
      localStorage.setItem('userInformation', JSON.stringify(userData));
      setUser(user);
      // alert success & redirect
    } else {
      localStorage.removeItem('userInformation');
      // alert error & clear button disabled
    }
    return isPass;
  }

  const getUserLocalStorage = () => {
    try {
      const { token, ...rest } = JSON.parse(localStorage.getItem('userInformation')) || {};
      console.log('userFromLocalStorage', token, rest);
      if (token) authByToken(token);
    } catch (error) {
      console.error('getUserLocalStorage', error);
    }
    return null;
  }

  useEffect(() => {
    getUserLocalStorage();
    // return () => {
    //   cleanup
    // };
  }, [])

  useEffect(() => {
    console.log('Render AuthProvider useEffect', user);
    return () => {
      // cleanup
    };
  }, [user])


  useEffect(() => {}, []);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        // userLoaded,
        // setUser,
        // setUserLoaded,
        authByToken,
        authByUserAndPass,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
