
import Navbar from '../Components/Navbar.jsx';
import NoteForm from '../Components/NoteForm.jsx';
import { useEffect, useState } from 'react';
import ReadAllNotes from './../Function_Firebase/ReadAllNotes.js'
import NotesPending from './NotesPending.jsx';
import EditNoteModal from './EditNoteModal.jsx';


const Muro = (user) => {
    const refreshAllNotes = () => {
        ReadAllNotes()
            .then(notas => {
                setAllNotes(notas)
            })
            .catch(err => {
                alert(err);
            });
    };
    useEffect(() => {
        refreshAllNotes();
    }, []);//callback y arreglo de dependecias

    const [allNotes, setAllNotes] = useState(null);// Al recibir todas las notas, vamos a guardarlas en este estado y ñluego renderizarlos
    const [selectedNote, setSelectedNote] = useState(null);

    return (
        <div className='Muro-container'>
            <Navbar user={user} />
            <div className='Muro-note'>
                <NoteForm refreshAllNotes={refreshAllNotes} />
                <div className='Muro-body'>
                    {allNotes && (allNotes.map(notas =>
                        <NotesPending // usamos un cortocircuito(&&)si el primero es verdadero continuamos al segundo
                            key={notas.id}
                            notas={notas}
                            setSelectedNote={setSelectedNote}
                            refreshAllNotes={refreshAllNotes}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Muro; 