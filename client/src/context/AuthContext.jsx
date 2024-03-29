/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from '../utils/services';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

  const [user, setUser] = useState(null);

  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    nameUser: "",
    userName: "",
    password: "",
    rolUser: ""
  });
  
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    password: ""
  });

  useEffect(()=>{
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
  },[])

  // console.log("registerInfo",registerInfo);
  // console.log("loginInfo",loginInfo);

  const updateRegisterInfo = useCallback ((info)=>{
    setRegisterInfo(info)
  },[]);
  
  const updateLoginInfo = useCallback ((info)=>{
    setLoginInfo(info)
  },[]);

  const registerUser = useCallback(async(e)=>{
    e.preventDefault();
   
    setIsRegisterLoading(true);
    setRegisterError(null)
    
    const response = await postRequest(
      `${baseUrl}/users/register`,
      JSON.stringify(registerInfo)
    );
    
    setIsRegisterLoading(false);
    
    if(response.error){
      return setRegisterError(response);
    }

    localStorage.setItem("User", JSON.stringify(response));
    setUser(response)
    setRegisterError(null)
  }, [registerInfo])

  const loginUser = useCallback(async(e)=>{
    e.preventDefault();
    
    setIsLoginLoading(true)
    setLoginError(null)

    const response = await postRequest(
      `${baseUrl}/users/login`,
      JSON.stringify(loginInfo)
    );
    
    setIsLoginLoading(false)
    
    if(response.error){
      return setLoginError(response)
    }

    localStorage.setItem("User", JSON.stringify(response))
    setUser(response)
  },[loginInfo])

  const logoutUser = useCallback(() =>{
    localStorage.removeItem("User");
    setUser(null);
    // ToDo: Resetear estado para evitar un reingreso
    loginInfo(null);
  },[])

  const cleanMessage = () =>{
    setLoginError(null);
    setRegisterError(null);
  }

  return (
    <AuthContext.Provider 
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginUser,
        loginInfo,
        loginError,
        updateLoginInfo,
        isLoginLoading,
        cleanMessage
      }}>
      {children}
    </AuthContext.Provider>)
};