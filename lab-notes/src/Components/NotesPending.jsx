
import RemoveNote from "../Function_Firebase/RemoveNote";
import { useState } from "react";
import EditNoteModal from "./EditNoteModal";
import Container from "./Container";
import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';


const Button = styled.button`
background: transparent;
border:0;
width: 100px;
height: 100px;
color: #c65314;

  // Estilo del icono cuando el botón está en estado hover
  &:hover svg {
    color: #c65314
  }
`

const NotesPending = ({ notas, user, setSelectedNote, refreshAllNotes }) => {

    const [showEditModal, setShowEditModal] = useState(false);

    const showModalEdit = () => {
        setSelectedNote(notas);
        setShowEditModal(true);
    };

    const hideModalEdit = () => {
        setShowEditModal(false);
    };

    return (
            <Container>
                <div>
                    <h3>Nota</h3>
                    <p> {notas.nota}</p>
                </div>
                <div>
                    <h3>Status</h3>
                    <p>{notas.status}</p>
                </div>
                <div>
                    <Button onClick={showModalEdit}><FaEdit size={45} /></Button>
                    <Button onClick={() => RemoveNote(notas.id,user, refreshAllNotes)}><FaTrash size={40} /></Button>
                </div>
                {showEditModal && (
                    <EditNoteModal
                        notas={notas}
                        user={user}
                        refreshAllNotes={refreshAllNotes}
                        showModal={setShowEditModal}
                    />
                )}
            </Container>
    );
};
export default NotesPending;