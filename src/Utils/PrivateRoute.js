import React from 'react';
import { Route, Navigate  } from 'react-router-dom';
import { getToken } from './Common';


function PrivateRoute({ children }) {
  const xx=getToken();
  const auth =true;
  return auth ? children : <Navigate to="/login" />;
}


export default PrivateRoute;