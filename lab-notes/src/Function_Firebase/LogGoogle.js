import { auth } from './dataFirebase.js';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from 'firebase/auth';

const LoginWithGoogle = async () => {
    try{
    const provider = new GoogleAuthProvider();
    signInWithRedirect (auth, provider);
    }catch(error){
        console.log(error);
    };
};

export default LoginWithGoogle; 