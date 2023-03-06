import { useEffect, useState } from 'react';
import editNote from './../Function_Firebase/EditNote.js';

const EditNoteModal = ({ notas, refreshAllNotes, showModal }) => {
    //sirve para disparar efectos secundarios cada vez uno de nuestros estados cambie
    useEffect(() => {
        setNoteEdit(notas);
    }, [notas]);//cada vez q la nota que viene de Muro cambie, se actualice el setnoteedit

    const [noteEdit, setNoteEdit] = useState({ ...notas });

    const submitHandler = (e) => {
        e.preventDefault();//prevenir que la pag se actualice
        editNote(noteEdit.id, noteEdit)
            .then(confirmacion => {
                //  const modal = document.getElementById('modal-edit-note');
                refreshAllNotes();//actualizamos
                closeModal()//cerramos
            })
            .catch((err) => {
                alert(err);
            });
        }
        const closeModal = () => {
            setNoteEdit(noteEdit.id, noteEdit);
            showModal(false);
        };

    
    return (
        //diálogo trae un metodo para mostrar u ocultar
        
        <dialog open={notas!== null}>
            <form onSubmit={submitHandler}>
                <label >
                    Nota
                    <input
                        type="text"
                        id='nota'
                        value={noteEdit.nota}
                        onChange={e => {
                            setNoteEdit({
                                ...noteEdit,
                                nota: e.target.value,
                            });
                        }} />
                </label>
                <label className="input-notes">
                    Status
                    <select
                        id='status'
                        value={noteEdit.status}
                        onChange={e => {
                            setNoteEdit({
                                ...noteEdit,
                                status: e.target.value,
                            });
                        }}>
                        <option value='Pendiente'>Pendiente</option>
                        <option value='Proceso'>Proceso</option>
                        <option value='Concluido'>Concluido</option>
                    </select>
                </label>
                <button
                 type='button' 
                 onClick = {closeModal}>
                    Cancelar
                </button>
                <button
                    className='button-addnote'
                    type='submit'>
                    Editar nota
                </button>
            </form>
        </dialog >
       
    )
};

export default EditNoteModal;