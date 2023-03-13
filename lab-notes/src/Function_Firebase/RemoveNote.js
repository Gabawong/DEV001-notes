import { db } from './dataFirebase.js';
import { deleteDoc, collection,doc } from 'firebase/firestore';

const RemoveNote = async(id,userId,refreshAllNotes)=> {

    try{
        const collectionNotas = collection(db,`notas-${userId}`);
        const docNoteRef = doc(collectionNotas, id);
        const confirmation = await deleteDoc(docNoteRef);
        refreshAllNotes();// Actualiza la lista de notas
        return confirmation; 
    }catch (err){
        console.log(err);
    }
}   

export default RemoveNote; 