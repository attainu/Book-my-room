import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCV65nTM-hvNozRboUkUVFUHZfbi76m0No",
    authDomain: "indianexams-bcab7.firebaseapp.com",
    databaseURL: "https://indianexams-bcab7.firebaseio.com",
    projectId: "indianexams-bcab7",
    storageBucket: "indianexams-bcab7.appspot.com",
    messagingSenderId: "645433905172",
    appId: "1:645433905172:web:af0d661546dcf3233f5701",
    measurementId: "G-QXXN1H3YDR"
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