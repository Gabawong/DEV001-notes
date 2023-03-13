import CreateNote from '../Function_Firebase/CreateNote.js'
import Container from './Container.jsx';
import  {auth}  from '../Function_Firebase/dataFirebase.js';



const NoteForm = ({ refreshAllNotes }) => {

   
    const submitHandler = async (e) => {
        e.preventDefault();
        const nota = e.target.nota.value;
        const status = e.target.status.value;
        const userId = auth.currentUser.uid;
        console.log(nota, status, userId);

        const data = { nota,status,userId};
        await CreateNote(data,userId);//esperar la confirmacion, 
        e.target.nota.value = e.target.status.value = ''; //todos los datos los regresamos a 0
        console.log(data);

        refreshAllNotes();//Despues de crear las notas y despues de limpiar la nota, vamos a llamar a refresh
    };
    return (
        <Container>
            <form
                className='form'
                onSubmit={submitHandler}>
                    <label className='form-label' >
                    <div>
                       <h3> Nota</h3>
                        <textarea
                            type="text" id='nota' />
                            </div>
                    </label>
                    <label className='form-label'>
                        <div>
                    <h3>Status</h3>
                        <select id='status' >
                            <option value='Pendiente'>Pendiente</option>
                            <option value='Proceso'>Proceso</option>
                            <option value='Concluido'>Concluido</option>
                        </select>
                        </div>
                    </label>
                <button type='submit' className='button-addnote'>
                    Agregar nota
                </button>
            </form>
        </Container>

    )

};
export default NoteForm;
