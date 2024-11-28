import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../index";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext<unknown>(undefined);  //temporary any type user, change later

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children } : { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, [])

  const initializeUser = async (user: any) => {    //temporary any type user, change later
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}