import React, { useState } from 'react'
import SignIn from './../Function_Firebase/SignIn'
import SignUp from './../Function_Firebase/Register'
import LoginWithGoogle from './../Function_Firebase/LogGoogle'
import SearchModal from './SearchModal'

const Home = () => {
    //Si estoy logeado(isloginIn o no estoy(setIsLoginIn), por defecto sería falso..osea que no estoy iniciando sesion sino que estoy en el registro 
    const [isLoginIn, setIsLoginIn] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();//prevenimos que la pag se actualice
        const email = e.target.email.value;//target se refiere al formulario, en este caso el email y accedemos a su valor
        const password = e.target.password.value;

        if (isLoginIn) {//si la persona está en modo acceder llamamos la funcion de iniciar sesion sino la de registrar
            await SignIn(email, password);
        } else {
            await SignUp(email, password);
        }
    }
    return (
        <><header className="Home-header">Daily notes</header>
    
            <div className="Home-contentForm">
                <h1>{isLoginIn ? 'Inicia Sesión' : 'Registrate'} </h1>
                <form
                    className="Home-form"
                    onSubmit={submitHandler}>
                        <div className="input-item">
                    <label htmlFor='email'>Email</label>
                    <input
                        className="Home-input"
                        type="text"
                        id="email" />
                        </div>
                        <div className="input-item">
                    <label htmlFor='password'>Password</label>
                    <input
                        className="Home-input"
                        type="password"
                        id="password" />
                        </div>
                    <button
                        className="Home-buttonEstado"
                        type="submit"
                        link="/Muro"
                    > {isLoginIn ? 'Acceder' : 'Registrate'}
                    </button>
                </form>
                <button
                    className='Home-buttonGoogle'
                    onClick={LoginWithGoogle}
                >Accede con Google
                </button>
                <a
                    className="Home-enlace"
                    onClick={() => setIsLoginIn(!isLoginIn)}>
                    {isLoginIn
                        ? '¿No tienes cuenta? Crea una'
                        : '¿Ya tienes cuenta? Accede'}
                </a>
            </div>
        </>
    );
};

export default Home;