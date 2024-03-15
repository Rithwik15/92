import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyDJwwGMoEHROfy6We-u6-2YfgxgklJfj98",
    authDomain: "community-app-f7848.firebaseapp.com",
    databaseURL: "https://community-app-f7848-default-rtdb.firebaseio.com",
    projectId: "community-app-f7848",
    storageBucket: "community-app-f7848.appspot.com",
    messagingSenderId: "271768963714",
    appId: "1:271768963714:web:9b25d1a4cca990ae29029b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;

