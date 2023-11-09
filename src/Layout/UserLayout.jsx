import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import NavItems from '../Shared/NavItems';
import Footer from '../Shared/Footer';

const UserLayout = () => {
    const { pathname } = useLocation();

    return (
        <>
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
                                <ul className="menu menu-horizontal gap-x-2 items-center">
                                    <NavItems></NavItems>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main className="container mx-auto my-12">
                        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
                            <aside className='flex md:flex-col flex-wrap gap-6 mx-auto justify-center md:justify-start md:w-full'>
                                <Link className={`px-2 py-1.5 text-center border rounded-md ${pathname === '/user' ? 'active' : ''}`} to='/user'>Profile</Link>
                                <NavLink className="px-2 py-1.5 text-center border rounded-md" to='/user/add-food'>Add New Food</NavLink>
                                <NavLink className="px-2 py-1.5 text-center border rounded-md" to='/user/my-foods'>My Added Foods</NavLink>
                                <NavLink className="px-2 py-1.5 text-center border rounded-md" to='/user/my-orders'>My Ordered Items</NavLink>
                            </aside>
                            <section className="container mx-auto col-span-5 min-h-screen">
                                <Outlet></Outlet>
                            </section>
                        </div>
                    </main>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        <NavItems></NavItems>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default UserLayout;