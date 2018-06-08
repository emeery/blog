import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Blog from '../componentes/Blog';
import ListaPost from '../componentes/ListaPost';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Blog} exact={true}/>
            <Route path="/ayuda" component={ListaPost}/>
        </div>    
    </BrowserRouter>
)
export default AppRouter