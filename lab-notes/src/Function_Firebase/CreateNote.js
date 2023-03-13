import { db } from './dataFirebase.js';
import { collection, addDoc } from 'firebase/firestore';


//con esta función va a recibir los datos de la nota
const CreateNote = async (data,userId) => {
    try {
        const collectionNotas = collection(db,`notas-${userId}`);//es una referencia a la colleccion a la que queremos hacer la escritura
        const notasId = await addDoc(collectionNotas,data,userId);//Creamos un documento y recibe la referencia a la coleccion y segundo los datos que vamos a esribir y tercero el usuario
        console.log(`Nueva nota creada con ID: ${notasId.id}`);
    } catch (error) {
        console.log(error);//revisar como gestionar los errores- checar documentacion 
    };
};

export default CreateNote;