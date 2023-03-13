
import LogOut from './../Function_Firebase/LogOut'


const Navbar = ({user}) => {

    return (
        <div className='Navbar-structure'>
            <div className='bienvenida1'>
            <p >Bienvenida</p>
            <p className='bienvenida2'>
            {user.user.email}</p>
            </div>
            <button
            className='button-Search'
            onClick={() => {
                const modalBusqueda = document.querySelector ('#search-modal');
                modalBusqueda.showModal();
            } }>
                Buscar 
            </button>
            <button
                className="button-LogOut"
                onClick={LogOut}
            >
                Cerrar Sesión
            </button>
        </div>
    );

}

export default Navbar; 