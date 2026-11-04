import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Web app Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBPOv_UNEJ6BLXvonfjkkIkA5BpsERcoE4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "nirviai-projects.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "nirviai-projects",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "nirviai-projects.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "592692096962",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:592692096962:web:4acf0b50a19ad78676705b",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-L46LBCEWCV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally to avoid breaking in unsupported environments
export let analytics = null;
export const analyticsPromise = typeof window !== "undefined"
  ? isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
        return analytics;
      }
      return null;
    }).catch(() => null)
  : Promise.resolve(null);

export default app;

