import { auth } from './dataFirebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import  showErrorMessage  from './Alert.js';

const SignUp = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error) {
        const errorCode = error.code;
        if (errorCode.includes('auth/email-already-in-use')) {
            showErrorMessage('Tu email ya se encuentra registrado.', idSpan);
        }
        if (errorCode.includes('auth/internal-error')) {
            showErrorMessage('Correo inválido.', idSpan);
        }
        if (errorCode.includes('auth/weak-password')) {
            showErrorMessage('La contraseña debe tener al menos 6 caracteres.', idSpan);
        };

    };
};

export default SignUp;