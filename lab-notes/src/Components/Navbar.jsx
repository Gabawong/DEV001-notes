
import LogOut from './../Function_Firebase/LogOut'


const Navbar = ({user}) => {

    return (
        <div className='Navbar-structure'>
            <div className='bienvenida1'>
            <img src={user.user.photoURL} alt = "Profile picture" />
            <p >Bienvenida</p>
            <p className='bienvenida2'>
            {user.user.displayName}</p>
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