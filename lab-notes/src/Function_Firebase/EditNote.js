import { db } from './dataFirebase.js';
import { collection, doc, setDoc } from 'firebase/firestore';

//los parametros seria el id y la nueva información 
const editNote = async(id,data) => {
    try{
    const collectionNotas = collection(db, 'Notas');//creamos una referencia a la colleccion
    const docNoteRef = doc(collectionNotas, id);//creamos ref al documento y le pasamos el id
    const resultado = await setDoc(docNoteRef, data, {merge:true})//Le decimos que al nuevo doc le sobre escriba la nueva data//con merge:true, solo modifica el doc existente y no crea nada nuevo osea cobinamos lo viejo con lo antiguo
    return resultado;
    }catch(error){
        console.log(error)
    }
};
export default editNote;