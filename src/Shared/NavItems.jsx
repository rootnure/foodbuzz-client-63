import { NavLink, useNavigate } from 'react-router-dom';
import useContextHook from '../hooks/useContextHook';
import { toast } from 'react-toastify';
import useAxios from '../hooks/useAxios';

const NavItems = () => {
    const { user, logOut } = useContextHook();
    const axiosSecure = useAxios();
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("logout clicked");
        logOut()
            .then(() => {
                toast.success('Logout Successfully');
                navigate('/');
                axiosSecure.post("/logout", { email: user.email })
            })
    }
    return (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allFood'>All Food</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            {user && <>
                <li onClick={handleLogOut}><button>Logout</button></li>
                <li><NavLink to='/user'>
                    <img src={user.photoURL} alt="User Profile Picture" className='h-10 w-10 rounded-full' />
                </NavLink></li>
            </>
            }
            {!user && <li><NavLink to='/login'>Login</NavLink></li>}
        </>

    );
};

export default NavItems;