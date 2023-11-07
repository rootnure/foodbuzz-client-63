import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useContextHook from '../hooks/useContextHook';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContextHook();
    if (loading) {
        return <p>Loading...</p>
    }
    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;