import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseValue = useFirebase();

  return (
    <AuthContext.Provider value={firebaseValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
