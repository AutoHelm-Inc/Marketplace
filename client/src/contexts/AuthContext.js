import React, { useContext, useEffect, useState } from "react";
import { auth, login, signout, signup } from "../firebase";

const AuthContext = React.createContext();

// Export useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provides auth related functionality to children
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState();
  const [loading, setLoading] = useState(true);

  // Subscribe once to firebase's onAuthStateChanged event for changes to the auth state of the user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      // When auth state changes, store the new user in state and set loading to false
      setAuthUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Expose the following in the provider
  const value = {
    authUser,
    login,
    signout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
