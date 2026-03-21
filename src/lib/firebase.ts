import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: This is a placeholder mock configuration to allow the site to build.
// The original FireBase configuration was removed and needs to be restored by the USER.
const firebaseConfig = {
  apiKey: "MOCK_KEY_REPLACE_ME",
  authDomain: "terait-web.firebaseapp.com",
  projectId: "terait-web",
  storageBucket: "terait-web.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
