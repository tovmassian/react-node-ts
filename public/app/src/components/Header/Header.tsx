import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.scss';

export const Header: React.FunctionComponent = () => {
    const isLoggedIn = useSelector((state: any) => state.auth.loggedIn);
    return (
        <>
            <nav>
                <div className="nav-wrapper container">
                    <Link to={isLoggedIn ? '/surveys' : '/'} className="brand-logo">
                        React-Node-TS Surveys
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        {isLoggedIn ? (
                            [
                                <li key={1}>
                                    <Link to="/surveys">Dashboard</Link>
                                </li>,
                                <li key={2}>
                                    <Link to="/surveys/new">Create New Survey</Link>
                                </li>,
                                <li key={3}>
                                    <a href="/auth/logout">Logout</a>
                                </li>,
                            ]
                        ) : (
                            <li>
                                <a href="/auth/google">Login with Google</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
