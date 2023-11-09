import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useContextHook from '../hooks/useContextHook';
import Lottie from 'lottie-react';
import biking from "../assets/biking.json";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContextHook();
    const { pathname } = useLocation();
    if (loading) {
        return <div className='w-96 mx-auto'><Lottie animationData={biking}></Lottie></div>
    }
    if (!user) {
        return <Navigate to="/login" state={pathname} ></Navigate>
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;