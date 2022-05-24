import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase_init';
import Loading from '../Loading/Loading';

const RequriedAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();


    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;


};

export default RequriedAuth;