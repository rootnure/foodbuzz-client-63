import PropTypes from 'prop-types';
import { onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const passwordLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserInfo = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            const loggedUser = { email: currentUser?.email }
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        if (res.data) {
                            console.log(res.data);
                        }
                    })
            } else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        if (res.data) {
                            console.log(res.data);
                        }
                    })
            }
        })
        return () => unsubscribe();
    }, [])

    const value = {
        user,
        loading,
        createUser,
        passwordLogin,
        googleSignIn,
        updateUserInfo,
        logOut
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