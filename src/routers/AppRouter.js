import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import App from '../componentes/App';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route 
            path="/" 
            component={App} 
            exact={true} 
        /> </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;