import React from "react";
import { useState } from "react";
import SearchNote from "../Function_Firebase/SearchNote";
import ButtonA from "./ButtonA";
import Container from "./Container";
import { FaSearch } from 'react-icons/fa';
import  {auth}  from '../Function_Firebase/dataFirebase.js';

const SearchModal = () => {

    const [listaResultados, setListaResultados] = useState(null);

    const search = (e) => {
        e.preventDefault();
        const string = e.target.searchInput.value;
        const userId = auth.currentUser.uid;
       
        //llamamos la funcion de searchNote
        SearchNote(string,userId).then(res => setListaResultados(res));
        console.log(SearchNote())
        e.target.searchInput.value = '';
    }

    return (
       
        <dialog id='search-modal'className="modal-content" style={{ overflow: 'auto', maxHeight: '500px' }}>
            <form
                onSubmit={search}>
                <input
                    className="input-search"
                    type='text'
                    placeholder='Busca por status'
                    id='searchInput'
                />
                <ButtonA type='submit'><FaSearch size={25} /></ButtonA>
            </form>
            {listaResultados && listaResultados.map(res => (
              
                <Container key={res.id}>
                    <h4>{res.nota} </h4>
                    <h4>{res.status} </h4>
                </Container>
                
            ))}
        </dialog>
        
    );
}

export default SearchModal;