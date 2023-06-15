import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";
  
  const [authState, setAuthState] = useState({
    isAuth: token.length > 0,
    token: null || token,
  });
  const loginUser = (token) => {
    setAuthState({
      isAuth: true,
      token: token,
    });
    localStorage.setItem("token", token);
    console.log("tkn",token)
  };
  const logoutUser = (token) => {
    setAuthState({
      isAuth: false,
      token: null,
    });
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
