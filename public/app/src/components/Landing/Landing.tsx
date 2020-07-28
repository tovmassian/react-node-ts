import React, { useState } from 'react';
import logo from '../../logo.svg';
import './Landing.scss';
import { useSelector } from 'react-redux';

export const Landing: React.FunctionComponent = () => {
    const [data] = useState('Please wait...');

    const user = useSelector((state: any) => state.auth);

    return (
        <>
            <div className="Landing">
                <header className="Landing-header">
                    <img src={logo} className="Landing-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a className="Landing-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        {data}
                    </a>
                    <a className="Landing-link" href="/api/greet/khach" rel="noopener noreferrer">
                        Send Greetings!
                    </a>
                    {user.role === 'user' ? (
                        <a href="/auth/google">Sign in with Google</a>
                    ) : (
                        <a href="/auth/google">Sign in with PicsArt</a>
                    )}
                </header>
            </div>
        </>
    );
};

export default Landing;
