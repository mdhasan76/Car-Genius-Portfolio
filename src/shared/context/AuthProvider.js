import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    //provider
    const googleProvider = new GoogleAuthProvider()


    //google Log in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //email & password Register
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log(user);

        })

        return () => {
            return unscribe()
        }
    }, [])

    const authInfo = { user, setUser, loading, googleSignIn, createNewUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;