import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';

export const App: React.FunctionComponent = () => {
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
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {data}
                </a>
            </header>
        </div>
    );
};

export default App;
