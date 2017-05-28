import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Tours from './components/Tours.js';

render(
        <Router>
            <div>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/tours" component={Tours}/>
            </div>
        </Router>,
        document.getElementById('content')
);
