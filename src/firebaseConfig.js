import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNTUnCH3BiVWkJciLu2COeZTj0JC2yVek",
  authDomain: "driveapp-71cd4.firebaseapp.com",
  databaseURL: "https://driveapp-71cd4-default-rtdb.firebaseio.com",
  projectId: "driveapp-71cd4",
  storageBucket: "driveapp-71cd4.appspot.com",
  messagingSenderId: "167921556915",
  appId: "1:167921556915:web:9db85b7bb29d1afec4bfc6"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth =getAuth(app);



