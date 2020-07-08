import React, { useState } from 'react';
import logo from '../../logo.svg';
import './Landing.scss';

export const Landing: React.FunctionComponent = () => {
    const [data, setData] = useState('Please wait...');

    async function callExpress(): Promise<void> {
        try {
            const response = await fetch('api/greet/rudo').then((res) => res.json());
            setData(response.message);
        } catch (err) {
            setData(err.message);
        }
    }

    callExpress();

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
                    <a href="/auth/google">Sign in with Google</a>
                </header>
            </div>
        </>
    );
};

export default Landing;
