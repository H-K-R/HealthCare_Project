import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseInitialize = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseInitialize;
