
import {render} from '@testing-library/react';
import React from 'react';
import { describe } from 'node:test';
import {BrowserRouter, MemoryRouter}from 'react-router-dom'
import {jest} from '@jest/globals';
import App from '../App';


describe('funcion App', () => {
    it('Que renderize correctamente', ()=>{
       const app = render(<App/>,{wrapper:MemoryRouter});
       expect(app).toBeDefined();
    });
});