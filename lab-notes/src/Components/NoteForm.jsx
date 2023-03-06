import CreateNote from '../Function_Firebase/CreateNote.js'


const NoteForm = ({ refreshAllNotes }) => {

    const submitHandler = async (e) => {
        e.preventDefault();
        const nota = e.target.nota.value;
        const status = e.target.status.value;
        //console.log(nota, status, 'hola');

        const data = { nota, status };
        await CreateNote(data);//esperar la confirmacion, 
        //e.target.nota.value = e.target.status.value = ''; //todos los datos los regresamos a 0
        //console.log(data);

        refreshAllNotes();//Despues de crear las notas y despues de limpiar la nota, vamos a llamar a refresh
    };
    return (
        <div className='Note-form'>
            <form
                className='form'
                onSubmit={submitHandler}>
                <div className='form-label'>
                    <label >
                        Nota
                        <input
                            type="text" id='nota' />
                    </label>
                    <label className="input-notes">
                        Status
                        <select id='status' >
                            <option value='Pendiente'>Pendiente</option>
                            <option value='Proceso'>Proceso</option>
                            <option value='Concluido'>Concluido</option>
                        </select>
                    </label>
                </div>
                <button type='submit' className='button-addnote'>
                    Agregar nota
                </button>
            </form>
        </div>

    )

};
export default NoteForm;
