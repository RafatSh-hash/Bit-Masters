import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

//Creating auth Context
export const AuthContext = createContext();

//import the children from app and getAuth from firebase
const UserContext = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with email and password
  const createEmailUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //create User with Google
  const googleProvider = new GoogleAuthProvider();
  const createGoogleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //create user with gitHub
  const githubProvider = new GithubAuthProvider();
  const createGitUser = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //Update The user profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //Logout button functionality
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Send Email for reset password request
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //capturing the user wherever the route changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //sending the return functions with auth Provider
  const authProvider = {
    createGoogleUser,
    createEmailUser,
    createGitUser,
    updateUserProfile,
    user,
    setUser,
    signIn,
    logOut,
    loading,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
