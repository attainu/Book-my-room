import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCCrJpzkEXNV0YU43CexvSYLqD6NJBxF2c",
    authDomain: "bookmyhotel-3f21f.firebaseapp.com",
    databaseURL: "https://bookmyhotel-3f21f.firebaseio.com",
    projectId: "bookmyhotel-3f21f",
    storageBucket: "bookmyhotel-3f21f.appspot.com",
    messagingSenderId: "357423416665",
    appId: "1:357423416665:web:a4a85d91c0bd18d4327848",
    measurementId: "G-WFVQKJG4DZ"
  };


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
        this.simpleAuth=app.auth;
    }
    isInit() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
    async login(email, pass) {
        return this.auth.signInWithEmailAndPassword(email, pass);
    }
    logout() {
        return this.auth.signOut();
    }
    async register(email, pass,name) {
        await this.auth.createUserWithEmailAndPassword(email, pass);
        this.auth.currentUser.updateProfile({displayName:name});
    }


    
}
export default new Firebase();