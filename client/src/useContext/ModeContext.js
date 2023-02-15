import { createContext, useState, useEffect  } from "react";

export const ModeContext = createContext()

export const ModeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false);


  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])


  return (
    <ModeContext.Provider value={{darkMode, toggleMode}}>
      {children}
    </ModeContext.Provider>
  )
}