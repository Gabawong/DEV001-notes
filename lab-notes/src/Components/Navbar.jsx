
import LogOut from './../Function_Firebase/LogOut'


const Navbar = ({user}) => {

    return (
        <div className='Navbar-structure'>
            <p>{user.email}</p>
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