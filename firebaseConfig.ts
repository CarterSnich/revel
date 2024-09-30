import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  ActionCodeSettings,
  getReactNativePersistence,
  initializeAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZe-MZdbS7wC8ypuPU86df6Fj6oQWC7HQ",
  authDomain: "elearning-fsl.firebaseapp.com",
  projectId: "elearning-fsl",
  storageBucket: "elearning-fsl.appspot.com",
  messagingSenderId: "928267147497",
  appId: "1:928267147497:web:a8b671f62faff801077878",
  measurementId: "G-DW6NSGW4CT",
};

const actionCodeSettings: ActionCodeSettings = {
  url: "https://elearning-fsl.firebaseapp.com",
  handleCodeInApp: true,
  android: {
    packageName: "com.ctrlz.revel",
  },
  dynamicLinkDomain: "elearningfsl.page.link",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore();

export { actionCodeSettings, app, auth, db };

