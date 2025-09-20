import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmU5HgPdpcQacoe9JFEO0EvI4zBjDcn58",
  authDomain: "copreneur-874bb.firebaseapp.com",
  projectId: "copreneur-874bb",
  storageBucket: "copreneur-874bb.firebasestorage.app",
  messagingSenderId: "762744383502",
  appId: "1:762744383502:web:94dc167ad4a36ebd37345f"
};

const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth, db };

