import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Blog from '../componentes/Blog';
import ListaPost from '../componentes/ListaPost';
import NuevoPost from '../componentes/NuevoPost';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route 
            path="/" 
            component={Blog} 
            exact={true}
            />
            <Route 
            path="/post" 
            component={ListaPost}
            exact={true}
            />
            <Route 
            exact={true}
            path="/post/new" 
            component={NuevoPost}
            />
        </div>    
    </BrowserRouter>
)
export default AppRouter