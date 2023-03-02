
// import "normalize.css";
import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


import Home from './Components/Home.jsx';
import Muro from './Components/Muro.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Function_Firebase/dataFirebase.js';
import React, { useState } from 'react';


function App() {
  //Creamos un estado, que será inicializado en null
  const [user, setUser] = useState(null); 
  //devolvemos la vista de Muro, osea si el usuario existe entonces  devolvemos Muro, si por el contrario
  //el usuario no existe  regresar la vista de Home 
onAuthStateChanged(auth, userFirebase => {
  if(userFirebase){//Si existe el usuario en firebase
setUser(userFirebase);//actualizamos nuestro usuario en react con el estado
  } else{
    setUser(null);//sino regresar el estado a null
  };
});

  return (
    <Routes>
      <Route path="/" element= { user ? <Muro user={user}/>: <Home/>} />
    </Routes>
)
}


export default App;
