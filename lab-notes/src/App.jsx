
import reactLogo from './assets/react.svg'
import './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


import Home from './Components/Home.jsx';
import Muro from './Components/Muro.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/src/Function_Firebase/dataFirebase.js';
import React, { useState } from 'react';

function App() {
  //Creamos un estado, que será inicialñizado en null
  const [user, setUser] = useState(null); 
  //devolvemos la vista de Muro, osea si el usuario existe entonces  devolvemos Muro, si por el contrario
  //el usuario no existe  regresar la vista de Home 
onAuthStateChanged(auth, userFirebase => {
  if(userFirebase){
setUser(userFirebase);
  } else{
    setUser(null);
  };
});

  return (
    <Routes>
      <Route path="/" element= { user ? <Muro user={user}/>: <Home/>} />
    </Routes>
)
}


export default App
