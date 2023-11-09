import MainLayout from '../Layout/MainLayout';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/ScrollToTop';

const Root = () => {
    return (
        <>
            <MainLayout>
                <Outlet></Outlet>
            </MainLayout>
            <ScrollToTop></ScrollToTop>
        </>
    );
};

export default Root;