import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './pages/App';
import Eventregister from "./pages/Eventregister";
import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/event" component={Eventregister}/>
    </BrowserRouter>
)

ReactDOM.render( routing,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
