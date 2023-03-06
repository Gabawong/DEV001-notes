import { db } from './dataFirebase.js';
import { deleteDoc, collection,doc } from 'firebase/firestore';

const RemoveNote = async(id,refreshAllNotes)=> {

    try{
        const collectionNotas = collection(db, 'Notas');
        const docNoteRef = doc(collectionNotas, id);
        const confirmation = await deleteDoc(docNoteRef);
        refreshAllNotes();// Actualiza la lista de notas
        return confirmation; 
    }catch (err){
        console.log(err);
    }
}   

export default RemoveNote; 