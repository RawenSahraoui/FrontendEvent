import React from 'react';
import { Route, Navigate } from 'react-router-dom';
const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
    />
);

export default PrivateRoute;
