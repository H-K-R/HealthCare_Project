import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });

    return () => unsub;
  }, [auth]);

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const registerWithEmailandPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setUser(user);
      })
      .catch((error) => {
        const { message } = error;
        setError(message);
      });
  };

  const loginWithEmailandPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setUser(user);
      })
      .catch((error) => {
        const { message } = error;
        setError(message);
      });
  };

  const signOutFunc = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    error,
    signInWithGoogle,
    registerWithEmailandPassword,
    loginWithEmailandPassword,
    signOutFunc,
  };
};

export default useFirebase;
