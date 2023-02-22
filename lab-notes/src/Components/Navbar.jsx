
import LogOut from '/src/Function_Firebase/LogOut'


const Navbar = ({user}) => {

    return (
        <div>
            <p>{user.email}</p>
            <button
                className="LogOut"
                onClick={LogOut}
            >
                Cerrar Sesión
            </button>
        </div>
    );

}

export default Navbar; 