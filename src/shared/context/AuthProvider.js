import React, { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const user = { name: 'hasan' }

    //provider
    const googleProvider = new GoogleAuthProvider()


    //google Log in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = { user, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;