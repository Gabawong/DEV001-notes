
import {render} from '@testing-library/react';
import React from 'react';
import { describe } from 'node:test';
import { MemoryRouter}from 'react-router-dom'
import {jest} from '@jest/globals';
import Home from '../Components/Home';


describe('funcion Home', () => {
    it('Que renderize correctamente', ()=>{
       const home = render(<Home/>,{wrapper:MemoryRouter});
       expect(home).toBeDefined();
    });
});