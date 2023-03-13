import { db } from './dataFirebase.js';
import { collection, getDocs } from 'firebase/firestore';

export let docsLegible;

const ReadAllNotes = async (userId) => {
    try {
        const collectionNotas = collection(db,`notas-${userId}`);
        
        const docsIllegible = await getDocs(collectionNotas,userId);// es un array y acá me esta lanzando datos que cifrados que no logro leer 
        //usar el método data() 
        docsLegible = docsIllegible.docs.map(d => {
            return {
                id: d.id,//para acceder a la propiedad de id del doc
                ...d.data(),//abrimos el objeto y que c/d uno de los campos sea parte del objeto mayor
            }
        }); //mapeamos docsIle.. y por cada documento devuelvo la info legible
       

    } catch (error) {
        console.log(error);
    }
}

export default ReadAllNotes;