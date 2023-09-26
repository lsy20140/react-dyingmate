import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(false);

export const AuthContextProvider = ({children}) => {
  const [token, setToken] = useState()
  const [login, setLogin] = useState(false)
  const [logout, setLogout] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('login-token'))
  },[])

  return (
    <AuthContext.Provider value={{token, setToken, login, setLogin, logout, setLogout}}>{children}</AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}

