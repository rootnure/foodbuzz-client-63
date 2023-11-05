import { NavLink } from 'react-router-dom';

const NavItems = () => {
    return (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allFood'>All Food</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/user'>Profile</NavLink></li>
            <li><button>Logout</button></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </>

    );
};

export default NavItems;