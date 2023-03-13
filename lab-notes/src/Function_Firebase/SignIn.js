import { auth, db } from './dataFirebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userId = user.uid;
        console.log(userId);
        console.log(user);
        //en mi project anterior usé el onAuthStateChanged con esta función para poder traer al usuario


    } catch (error) {

        if (errorCode.includes('auth/user-not-found')) {
            showErrorMessage(
                'El correo electrónico que ingresaste no está conectado a una cuenta.',
                idSpan,
            );
        }
        if (errorCode.includes('auth/wrong-password')) {
            showErrorMessage('La contraseña que ingresaste es inválida.', idSpan);
        }
        if (errorCode.includes('auth/invalid-email')) {
            showErrorMessage(
                'Debes ingresar tu correo y contraseña para iniciar sesión o verifica que el correo electrónico es válido.',
                idSpan,
            );
        }
        if (errorCode.includes('auth/internal-error')) {
            const errorCode = error.code;
            showErrorMessage(
                'Debes ingresar tu contraseña para iniciar sesión.',
                idSpan,
            );
        }
    };
};

export default SignIn;