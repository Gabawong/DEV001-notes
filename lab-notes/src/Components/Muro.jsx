
import Navbar from '../Components/Navbar.jsx';
import NoteForm from '../Components/NoteForm.jsx';
import { useEffect, useState } from 'react';
import ReadAllNotes from './../Function_Firebase/ReadAllNotes.js'
import NotesPending from './NotesPending.jsx';
import EditNoteModal from './EditNoteModal.jsx';
import  SearchNote  from './../Function_Firebase/SearchNote.js'
import SearchModal from './SearchModal.jsx';
import { docsLegible } from './../Function_Firebase/ReadAllNotes.js';

const Muro = (user) => {
   
    console.log(docsLegible)
    const refreshAllNotes = async() => {
         await ReadAllNotes(user.user.uid)
        
            // .then(notas => {
                setAllNotes(docsLegible);
               
            // })
            // .catch(err => {
            //     alert(err);
            // });
    };
    useEffect(() => {
        refreshAllNotes();
        // SearchNote('hola mama').then(resultados => console.log('resultados query: ',resultados));
    }, []);//callback y arreglo de dependecias

    const [allNotes, setAllNotes] = useState(null);// Al recibir todas las notas, vamos a guardarlas en este estado y ñluego renderizarlos
    const [selectedNote, setSelectedNote] = useState(null);

    return (
        <div className='Muro-container'>
            <Navbar user={user} />
            <SearchModal/>
            <div className='Muro-note'>
                <NoteForm refreshAllNotes={refreshAllNotes} />
                <div className='Muro-body'>
                    {allNotes && (allNotes.map(notas =>
                        <NotesPending // usamos un cortocircuito(&&)si el primero es verdadero continuamos al segundo
                            key={notas.id}
                            notas={notas}
                            user={user.user.uid}
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