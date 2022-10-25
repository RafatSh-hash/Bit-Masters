import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
 
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createEmailUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
 
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);

  };

  const googleProvider = new GoogleAuthProvider();
  const createGoogleUser = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };



  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user changed", currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authProvider = {
    createGoogleUser,
    createEmailUser,
    user,
    setUser,
    signIn,
    logOut,
    loading
  };

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
