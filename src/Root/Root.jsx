import MainLayout from '../Layout/MainLayout';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <MainLayout>
                <Outlet></Outlet>
            </MainLayout>
        </>
    );
};

export default Root;