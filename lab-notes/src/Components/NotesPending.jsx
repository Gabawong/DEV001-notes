
import RemoveNote from "../Function_Firebase/RemoveNote";

const NotesPending = ({ notas,setSelectedNote, refreshAllNotes }) => {

    const showModalEdit = () => {
        setSelectedNote(notas)//guardamos la nota que seleccionemos
        const modal = document.getElementById ('modal-edit-note');
        modal.showModal();
    }
    const removeNote = () => {
    }
    
    return (
        <div className="notas-pending">
            <div>
                <h3>Nota</h3>
                <p> {notas.nota}</p>
            </div>
            <div>
                <h3>Status</h3>
                <p>{notas.status}</p>
            </div>
            <button
            onClick={showModalEdit}
            >Editar</button>
            <button
            onClick={()=>{RemoveNote(notas.id).then
            (confirmacion => {refreshAllNotes();
            })
        }}
            >Eliminar</button>
        </div>
    );
};
export default NotesPending;