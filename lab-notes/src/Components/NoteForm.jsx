import CreateNote from '/src/Function_Firebase/CreateNote.js'


const NoteForm = ({ refreshAllNotes }) => {

    const submitHandler = async (e) => {
        e.preventDefault();
        const nota = e.target.nota.value;
        const status = e.target.status.value;
        //console.log(nota, status, 'hola');

        const data = { nota, status };
        await CreateNote(data);//esperar la confirmacion, 
        e.target.nota.value = e.target.status.value = ''; //todos los datos los regresamos a 0
        
        refreshAllNotes();//Despues de crear las notas y despues de limpiar la nota, vamos a llamar a refresh
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    Nota
                    <input
                        type="text" id='nota' />
                </label>
                <label>
                    Status
                    <select id='status'>
                        <option value='Pendiente'>Pendiente</option>
                        <option value='Proceso'>Proceso</option>
                        <option value='Concluido'>Concluido</option>
                    </select>
                </label>
                <button>
                    Agregar nota
                </button>
            </form>
        </div>

    )

};
export default NoteForm;
