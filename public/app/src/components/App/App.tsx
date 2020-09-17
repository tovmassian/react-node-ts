import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import './App.scss';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const SurveyNew: React.FunctionComponent = () => <h2>SurveyNew</h2>;

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
                    <ProtectedRoute exact={true} roles={['admin', 'user']} path="/surveys" component={Dashboard} />
                    <ProtectedRoute path="/surveys/new" roles={['admin']} component={SurveyNew} />
                </div>
            </BrowserRouter>
        </>
    );
};

const mapDispatchToProps = { fetchUser };

export default connect(null, mapDispatchToProps)(App);
