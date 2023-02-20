import  { auth }  from './dataFirebase.js';
import { signOut } from 'firebase/auth';

const LogOut = async ()=> {
    try{
        await signOut(auth);
    } catch (error){
        console.log(error);
    }
}

export default LogOut; 