import { createContext, useState, useEffect  } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )


  const login = async (values) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", values, {
      withCredentials: true,
    });
    setCurrentUser(res.data)
  };

  const register = async (values) => {
    const res = await axios.post("http://localhost:8800/api/auth/register", values, {
      withCredentials: true,
    });
    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])


  return (
    <AuthContext.Provider value={{currentUser,login,register}}>
      {children}
    </AuthContext.Provider>
  )
}