import React, {useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';



const PrivateRoute = ({ children }) => {
    
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    
    if (loading) {
        return (
            <div className="text-center">
                <span>Loading........</span>
            </div>
        )
    }
    else {
        if (!user ) {
            return <Navigate to='/login' state={{from: location}} replace></Navigate>
            
        }
        else {
            return children
        }
    }

   
    
};

export default PrivateRoute;