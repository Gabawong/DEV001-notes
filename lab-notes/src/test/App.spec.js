
import {render} from '@testing-library/react';
import React from 'react';
import { describe } from 'node:test';
import {BrowserRouter, MemoryRouter}from 'react-router-dom'
import {jest} from '@jest/globals';
import App from '../App';


describe('funcion App', () => {
    it('Que renderize correctamente', ()=>{
       const app = render(<App/>,{wrapper:MemoryRouter});//es un componente de prueba que se utiliza en el framework de pruebas Jest y Enzyme en React. Este objeto se utiliza para simular el comportamiento de un enrutador en una aplicación React durante las pruebas unitarias.
       expect(app).toBeDefined();
    });
});