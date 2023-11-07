import PropTypes from 'prop-types';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const user = { email: 'nur@mail.com', displayName: 'Nur', img: "https://lh3.googleusercontent.com/-9zj1OKiW9yA/AAAAAAAAAAI/AAAAAAAAAAA/AML38-tULD6SnE_yuWSTWPjZyCAFwXDNtQ/photo.jpg?sz=46" }

    const value = {
        user
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;