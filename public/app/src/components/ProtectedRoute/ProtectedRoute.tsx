import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, roles, ...rest }: any) => {
    const user = useSelector((state: any) => state.auth);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!user) {
                    // not logged in so redirect to login page with the return url
                    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
                }

                // check if route is restricted by role
                if (roles && roles.indexOf(user.role) === -1) {
                    // role not authorised so redirect to home page
                    return <Redirect to={{ pathname: '/' }} />;
                }

                return <Component {...rest} {...props} />;
            }}
        />
    );
};

export default ProtectedRoute;
