import React, { useContext } from 'react'
import { AuthContext } from '../pages/context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    // console.log(location);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  )
}

export default PriveteRoute
