import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import NavItems from "../Shared/NavItems";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Footer from '../Shared/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
                    <div className="container mx-auto">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-2xl">
                                <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <Link to='/'><img src="https://i.ibb.co/d4Mz7HD/Image-removebg-preview.png" alt="Logo" className="h-12" /></Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-2">
                                <NavItems></NavItems>
                            </ul>
                        </div>
                    </div>
                </div>
                <main className="container mx-auto">
                    {children}
                </main>
                <Footer></Footer>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-9/12 min-h-full bg-base-200 text-lg">
                    <NavItems></NavItems>
                </ul>
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;