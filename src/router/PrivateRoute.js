import React, { useContext } from 'react';
import { AuthContext } from '../../shared/context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <h5 className='text-5xl text-center'> Loading...</h5>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;