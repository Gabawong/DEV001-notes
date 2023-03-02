import { db } from './dataFirebase.js';
import { deleteDoc, collection,doc } from 'firebase/firestore';

const RemoveNote = async(id)=> {

    try{
        const collectionNotas = collection(db, 'Notas');
        const docNoteRef = doc(collectionNotas, id);
        const confirmation = await deleteDoc(docNoteRef);
        return confirmation; 
    }catch (err){
        console.log(err);
    }
}   

export default RemoveNote; 