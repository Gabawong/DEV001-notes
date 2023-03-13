import { db } from './dataFirebase.js';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';


//recibimos un string de busqueda
const SearchNote = async (string,userId) => {
    const collectionNotas = collection(db,`notas-${userId}`);
    console.log(collectionNotas)
 
    
    //crear una query, query requiere una ref de collection y ponemos los requisitos 
    const queryStatus = query(collectionNotas,
        where('status', '==', string));//acá le digo q quiero que me entregues todos los documentos cuya descripcion sea igual a lo que te paso   
    //devolverá todos los documentos cuyo valor de la propiedad nota sea mayor o igual que el valor que estás buscando. 
    const queryNote = query(collectionNotas,
        where('nota', '>=', string.toLowerCase()));

    //traer los doc que cumplan con query, ya no usamos getdocs sino promiseall
    const docusCifrados = await Promise.all([
        getDocs(queryStatus),
        getDocs(queryNote),
    ]);
    console.log(docusCifrados)

    //Acá le estoy diciendo que recorra el array de querys, luego que recorremos cada uno y buscamos docs y hacemos push al array vacio, solo la info legible, por eso uso doc.data() 
    const allResults = [];
    docusCifrados.forEach(query => {
        query.docs.forEach(doc => allResults.push(doc.data()));
    });
    console.log(allResults)
    //usamos un set para que no se hagan busquedas multiples
    // const setResults = new Set(allResults);
    return allResults;
    // console.log(setResults);


    // const docus = docusCifrados.docs.map(d => d.data());
    // return docus;
}

export default SearchNote;