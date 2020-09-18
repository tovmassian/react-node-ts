import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import './App.scss';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import ImagesGrid from '../ImagesGrid/ImagesGrid';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

interface AppProps {
    children: React.ReactNode;
    fetchUser: any;
}

export const App: any = ({ fetchUser }: AppProps) => {
    fetchUser();
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Route exact={true} path="/" component={Landing} />
                    <ProtectedRoute exact={true} roles={['admin', 'user']} path="/images" component={ImagesGrid} />
                </div>
            </BrowserRouter>
        </>
    );
};

const mapDispatchToProps = { fetchUser };

export default connect(null, mapDispatchToProps)(App);
