
const NotesPending = ({ notas }) => {

    return (
        <div>
            <div>
                <h3>Nota</h3>
                <p>{notas.nota}</p>
            </div>
            <div>
                <h3>Status</h3>
                <p>{notas.status}</p>
            </div>
        </div>
    );
};
export default NotesPending;