import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import App from './componentes/App';

const AppRouter = () => (
    <BrowserRouter>
<Route path="/" component={App}/>
</BrowserRouter>
);
export default AppRouter;