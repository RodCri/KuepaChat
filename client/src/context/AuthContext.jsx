/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    nameUser: "",
    userName: "",
    password: "",
    rolUser: ""
  });

  console.log("registerInfo",registerInfo);
  
  const updateRegisterInfo = useCallback ((info)=>{
    setRegisterInfo(info)
  },[])

  return (
    <AuthContext.Provider 
      value={{
        user,
        registerInfo,
        updateRegisterInfo
      }}>
      {children}
    </AuthContext.Provider>)
};