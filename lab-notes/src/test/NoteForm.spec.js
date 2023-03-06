import { render, fireEvent, screen, userEvent } from '@testing-library/react';
import NoteForm from '../Components/NoteForm';
import CreateNote from '../Function_Firebase/CreateNote';


jest.mock('../Function_Firebase/CreateNote');//simularemos la funcionalidad del módulo CreateNote para que no realice ninguna acción real




describe('NoteForm', () => {//creamos las variables para realizar pruebas unitarias sobre el componente NoteForm
    let refreshAllNotesMock;
    let notas;


    //se usa let y no const ya que se pueden modificar estas variables dentro del ámbito de la prueba.

    beforeEach(() => {//se definen en la sección beforeEach del bloque de pruebas, osea q se inicializarán antes de cada test en el bloque describe
        refreshAllNotesMock = jest.fn();

        notas = {
            id: '123',
            nota: 'This is a test',
            status: 'Pendiente',

        };//Se crea un objeto simulado

    });

    afterEach(() => {//se utiliza para limpiar el estado de las funciones simuladas creadas con jest.fn() después de cada test.
        //Esto asegura que el estado de las funciones no afectará a los siguientes tests en el mismo bloque describe.
        jest.clearAllMocks();
    });

    it('Debe renderizar correctamente', () => {
        const component = render(
            <NoteForm
                refreshAllNotes={refreshAllNotesMock}
                notas={notas}
            />
        );
        const notaInput = component.getByLabelText('Nota');
        fireEvent.change(notaInput, { target: { value: 'This is a test' } });
        const notaElement = component.getByDisplayValue('This is a test');
        const statusElement = component.getByText('Pendiente');
        const Button = component.getByText('Agregar nota');

        //toBeInTheDocument verifica si cada elemento se encuentra en el árbol del DOM y si es visible para el usuario. Si alguno de los elementos no se encuentra en el DOM, la prueba fallará.
        expect(notaElement).toBeInTheDocument();
        expect(statusElement).toBeInTheDocument();
        expect(Button).toBeInTheDocument();
    });

    it('Debería de llamar a la función submitHandler una vez se de click en el botón Agregar nota', () => {
        const mockSubmitHandler = jest.fn();


        const component = render(
            <NoteForm
                refreshAllNotes={refreshAllNotesMock}
                notas={notas}
                SubmitHandler={mockSubmitHandler}
            />
        );


        // Simulamos un cambio en el input de "Nota"
        const notaInput = component.getByLabelText('Nota');
        fireEvent.change(notaInput, { target: { value: 'This is a test' } });

        // Simulamos un cambio en el select de "Status"
        const statusSelect = component.getByLabelText('Status');
        fireEvent.change(statusSelect, { target: { value: 'Pendiente' } });

        // Enviamos el formulario
        const form = component.container.querySelector('form');
        fireEvent.submit(form);

        // Buscamos el botón de "Agregar nota"
        const Button = component.getByText('Agregar nota');

        // Hacemos clic en el botón
        userEvent.click(Button);

        // Verificamos que la función submitHandler se haya llamado una vez
        expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    });
});









