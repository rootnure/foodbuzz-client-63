import { NavLink, useNavigate } from 'react-router-dom';
import useContextHook from '../hooks/useContextHook';
import { toast } from 'react-toastify';

const NavItems = () => {
    const { user, logOut } = useContextHook();
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("logout clicked");
        logOut()
            .then(() => {
                toast.success('Logout Successfully');
                navigate('/');
            })
    }
    return (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allFood'>All Food</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            {user && <>
                <li><NavLink to='/user'>Profile</NavLink></li>
                <li onClick={handleLogOut}><button>Logout</button></li>
            </>
            }
            {!user && <li><NavLink to='/login'>Login</NavLink></li>}
        </>

    );
};

export default NavItems;