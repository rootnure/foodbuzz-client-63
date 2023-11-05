import { NavLink } from 'react-router-dom';

const NavItems = () => {
    return (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </>

    );
};

export default NavItems;