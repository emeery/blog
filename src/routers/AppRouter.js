import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import App from '../componentes/App';
import Oye from '../componentes/Oye';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route 
            path="/" 
            component={App} 
            exact={true} 
            /> 
            <Route 
            path="/oye" 
            component={Oye} 
             
            /> 
        </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;