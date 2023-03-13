import { useEffect, useState } from 'react';
import editNote from './../Function_Firebase/EditNote.js';
import ButtonA from './ButtonA.jsx';
import { FaSave, FaTimes } from 'react-icons/fa';



const EditNoteModal = ({ notas, user, refreshAllNotes, showModal }) => {
    //sirve para disparar efectos secundarios cada vez uno de nuestros estados cambie
    useEffect(() => {
        setNoteEdit(notas);
    }, [notas]);//cada vez q la nota que viene de Muro cambie, se actualice el setnoteedit

    const [noteEdit, setNoteEdit] = useState({ ...notas });

    const submitHandler = (e) => {
        e.preventDefault();//prevenir que la pag se actualice
        editNote(noteEdit.id,user,noteEdit)
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
        setNoteEdit(noteEdit.id,user, noteEdit);
        showModal(false);
    };


    return (
        //diálogo trae un metodo para mostrar u ocultar

        <dialog open={notas !== null}>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <label className='form-label' >
                        Nota
                        <textarea
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
                    <label className='form-label'>
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
                    <br></br>
                    <br></br>
                    <div>
                        <ButtonA
                            className='button-addnote'
                            type='submit'><FaSave size={40} />

                        </ButtonA>
                        <ButtonA
                            type='button'
                            onClick={closeModal}><FaTimes size={40} />
                        </ButtonA>
                    </div>
                    </div>
            </form>
        
        </dialog >
      
       
    )
};

export default EditNoteModal;