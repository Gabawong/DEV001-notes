import { db } from './dataFirebase.js';
import { collection, getDocs } from 'firebase/firestore';

const ReadAllNotes = async() => {
    try{
    const collectionNotas = collection(db, 'Notas');
    const docsIllegible = await getDocs(collectionNotas);// es un array y acá me esta lanzando datos que cifrados que no logro leer 
//usar el método data() 
const docsLegible = docsIllegible.docs.map(d => {
    return{
        id:d.id,//para acceder a la propiedad de id del doc
        ...d.data(),//abrimos el objeto y que c/d uno de los campos se parte del objeto mayor
    }
    });//mapeamos docsIle.. y por cada documento devuelvo la info legible
    return docsLegible;
    }catch(error){
        console.log(error);
    }
}

export default ReadAllNotes;