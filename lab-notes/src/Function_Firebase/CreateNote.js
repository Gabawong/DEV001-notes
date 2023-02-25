import { db } from './dataFirebase.js';
import { collection, addDoc,doc,setDoc } from 'firebase/firestore';

//con esta función va a recibir los datos de la nota
const CreateNote = async (data) => {
    try {
        const collectionNotas = collection(db, 'Notas');//es una referencia a la colleccion a la que queremos hacer la escritura
        const notasId = await addDoc(collectionNotas, data);//Creamos un documento y recibe la referencia a la coleccion y segundo los datos que vamos a esribir
        console.log(notasId);
    } catch (error) {
        console.log(error);//revisar como gestionar los errores- checar documentacion 
    };
};

export default CreateNote;