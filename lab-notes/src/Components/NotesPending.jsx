
import RemoveNote from "../Function_Firebase/RemoveNote";
import { useState } from "react";
import EditNoteModal from "./EditNoteModal";

const NotesPending = ({ notas, setSelectedNote, refreshAllNotes }) => {

    const [showEditModal, setShowEditModal] = useState(false);

    const showModalEdit = () => {
        setSelectedNote(notas);
        setShowEditModal(true);
    };

    const hideModalEdit = () => {
        setShowEditModal(false);
    };

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
            <button onClick={showModalEdit}>Editar</button>
            <button onClick={() => RemoveNote(notas.id,refreshAllNotes)}>Eliminar</button>
            {showEditModal && (
                <EditNoteModal
                    notas={notas}
                    refreshAllNotes={refreshAllNotes}
                    showModal={setShowEditModal}
                />
            )}
        </div>
    );
};
export default NotesPending;