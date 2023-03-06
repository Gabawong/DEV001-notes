import { render, fireEvent, screen } from '@testing-library/react';
import NotesPending from '../Components/NotesPending';
import RemoveNote from "../Function_Firebase/RemoveNote";

jest.mock('../Function_Firebase/RemoveNote');//simularemos la funcionalidad del módulo RemoveNote para que no realice ninguna acción real 

describe('NotesPending', () => {//creamos las variables para realizar pruebas unitarias sobre el componente NotesPending
  let setSelectedNoteMock;
  let refreshAllNotesMock;
  let notas;
  //se usa let y no const ya que se pueden modificar estas variables dentro del ámbito de la prueba.

  beforeEach(() => {//se definen en la sección beforeEach del bloque de pruebas, osea q se inicializarán antes de cada test en el bloque describe
    setSelectedNoteMock = jest.fn();
    refreshAllNotesMock = jest.fn();
    notas = { id: '123', nota: 'This is a test', status: 'Pendiente' };//Se crea un objeto simulado
    const modal = document.createElement('dialog');
    modal.setAttribute('id', 'modal-edit-note');
    document.body.appendChild(modal);
  });

  afterEach(() => {//se utiliza para limpiar el estado de las funciones simuladas creadas con jest.fn() después de cada test.
    //Esto asegura que el estado de las funciones no afectará a los siguientes tests en el mismo bloque describe.
    jest.clearAllMocks();
    document.body.removeChild(document.getElementById('modal-edit-note'));
  });

  it('Debe renderizar correctamente', () => {
    const component = render(
      <NotesPending
        notas={notas}
        setSelectedNote={setSelectedNoteMock}
        refreshAllNotes={refreshAllNotesMock}
      />
    );

    const notaElement = component.getByText('This is a test');
    const statusElement = component.getByText('Pendiente');
    const editarButton = component.getByText('Editar');
    const eliminarButton = component.getByText('Eliminar');

    //toBeInTheDocument verifica si cada elemento se encuentra en el árbol del DOM y si es visible para el usuario. Si alguno de los elementos no se encuentra en el DOM, la prueba fallará.
    expect(notaElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
    expect(editarButton).toBeInTheDocument();
    expect(eliminarButton).toBeInTheDocument();
  });

  it('debería llamar a setSelectedNote al pulsar el botón "Editar', () => {
    const component = render(
      <NotesPending
        notas={notas}
        setSelectedNote={setSelectedNoteMock}
        refreshAllNotes={refreshAllNotesMock}
      />
    );
    const editarButton = component.getByText('Editar');
    fireEvent.click(editarButton);

    expect(setSelectedNoteMock).toHaveBeenCalledWith(notas);
  });
  it('debería llamar a RemoveNote y refreshAllNotes al pulsar el botón "Eliminar"', () => {
    const component = render(
      <NotesPending
        notas={notas}
        setSelectedNote={setSelectedNoteMock}
        refreshAllNotes={refreshAllNotesMock}
      />
    );

    const eliminarButton = component.getByText('Eliminar');
    fireEvent.click(eliminarButton);

    expect(RemoveNote).toHaveBeenCalledWith(
      notas.id,
      refreshAllNotesMock
    );
  });

it('Debería mostrar el modal de edición al pulsar el botón editar', () => {
  const component = render(//pasamos nuevamente los argumentos al componente 
    <NotesPending
      notas={notas}
      setSelectedNote={setSelectedNoteMock}
      refreshAllNotes={refreshAllNotesMock}
    />
  );
  const editButton = component.getByText("Editar");// buscamos el elemento editar del componente NotesPending
    fireEvent.click(editButton);//Simulamos el click al botón

    expect(setSelectedNoteMock).toHaveBeenCalledWith(notas);//verificamos que llamenos a setSelectedNoteMock con la notas como argumento
    expect(component.getByText("Editar nota")).toBeInTheDocument();//verificamos que verifica que el modal para editar se muestre correctamente en la interfaz 
  });
});