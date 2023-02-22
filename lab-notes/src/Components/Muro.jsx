
import Navbar from '../Components/Navbar.jsx';
import NoteForm from '../Components/NoteForm.jsx';
import { useEffect, useState } from 'react';
import  ReadAllNotes from '/src/Function_Firebase/ReadAllNotes.js'
import NotesPending from './NotesPending.jsx';


const Muro = (user) => {
    const refreshAllNotes = () => {
        ReadAllNotes()
        .then(notas => {
            setAllNotes(notas)
        })
        .catch (err => {
            alert(err);
        });
    };
    useEffect(()=> {
        refreshAllNotes();//
    }, []);

    const [allNotes, setAllNotes] = useState(null);// Al recibir todas las notas, vamos a guardarlas en este estado y ñluego renderizarlos

    return (
        <div className='Muro-container'>
            <Navbar user = {user} />
            <div className='Muro-note'>
            <NoteForm refreshAllNotes = {refreshAllNotes}/> 
            <div className='Muro-body'>
            {allNotes && (allNotes.map(notas => <NotesPending
             notas= {notas}/>// usamos un cortocircuito(&&)si el primero es verdadero continuamos al segundo
            ))}
            </div>
            </div>
        </div>
    );

}

export default Muro; 