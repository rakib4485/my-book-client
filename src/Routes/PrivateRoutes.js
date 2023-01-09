import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loader from '../Pages/Shared/Loader/Loader';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    // if(loading){
    //     return <Loader></Loader>
    // }

    if(user){ 
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;