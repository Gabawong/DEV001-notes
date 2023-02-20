// import {
//     createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
//     GoogleAuthProvider, sendPasswordResetEmail, getAuth, onAuthStateChanged, signOut,
// } from 'firebase/auth';

// export const auth = getAuth(app);

// //Crear cuenta
// export const singup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// //Ingresar a Sesión
// export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

// //Si olvidó contraseña
// export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

// //Ingresar por la cuenta de google
// export const signInGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
// };

// export const stateChanged = (user) => onAuthStateChanged(auth, (user));

// //Cerrar sesión
// export const signOut2 = () => signOut(auth);
