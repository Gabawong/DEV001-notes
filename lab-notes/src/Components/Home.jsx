import React, { useState } from 'react'
import SignIn from '/src/Function_Firebase/SignIn'
import SignUp from '/src/Function_Firebase/Register'
import LoginWithGoogle from '/src/Function_Firebase/LogGoogle'
import HomeItems from "./HomeItems";


const Home = () => {
    //Si estoy loginIn o no estoy(setIsLoginIn), por defecto sería falso..osea que no estoy iniciando sesion sino que estoy en el registro 
    const [isLoginIn, setIsLoginIn] = useState(false);
  
    const submitHandler = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (isLoginIn) {
            await SignIn(email, password);
        } else {
            await SignUp(email, password);
        }
    }
   
    return (
        <><header className="Home-header">Daily notes</header><h4 className="Home-msnwelcome">
            Bienvenida!a Daily notes <br></br>
            Aquí podrás llevar un control de todas las actividades del día a día.<br></br>
        </h4><div className="Home-contentForm">
                <div>
                    <h2>{isLoginIn ? 'Inicia Sesión' : 'Registrate'} </h2>
                    <form 
                    className="Home-form"
                    onSubmit = {submitHandler}>
                        <label htmlFor='email'>Email</label>
                        <input
                            className="Home-input"
                            type="text"
                            id="email" />
                        <label htmlFor='password'>Password</label>
                        <input
                            className="Home-input"
                            type="password"
                            id="password" />
                        <button
                            className="Home-button"
                            type="submit"
                            link="/Muro"
                        > {isLoginIn ? 'Acceder' : 'Registrate'}
                        </button>
                    </form>
                    <button
                    className='Home-button"'
                    onClick={LoginWithGoogle}
                    >Accede con Google
                    </button>
                    <button
                        className="Home-button"
                        onClick={() => setIsLoginIn(!isLoginIn)}>
                        {isLoginIn
                            ? '¿No tienes cuenta? Crea una'
                            : '¿Ya tienes cuenta? Accede'}
                    </button>
                </div>
            </div></>
    );
};

export default Home;