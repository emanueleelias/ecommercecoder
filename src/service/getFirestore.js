import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNmx5-s3FCw0M9UqxagmWGxxBh2xx21nM",
    authDomain: "tiendareact-57be8.firebaseapp.com",
    projectId: "tiendareact-57be8",
    storageBucket: "tiendareact-57be8.appspot.com",
    messagingSenderId: "388313982216",
    appId: "1:388313982216:web:da091da5f22014a33a78bd"
};


const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}
