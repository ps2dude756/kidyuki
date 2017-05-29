import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Tours from './components/Tours.js';
import KidYuki from './components/about/KidYuki.js';
import Amaya from './components/about/Amaya.js';
import David from './components/about/David.js';
import Kyle from './components/about/Kyle.js';
import Andre from './components/about/Andre.js';
import Deja from './components/about/Deja.js';

render(
        <Router>
            <div>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/tours" component={Tours}/>
                <Route path="/about/kid_yuki" component={KidYuki}/>
                <Route path="/about/amaya" component={Amaya}/>
                <Route path="/about/david" component={David}/>
                <Route path="/about/kyle" component={Kyle}/>
                <Route path="/about/andre" component={Andre}/>
                <Route path="/about/deja" component={Deja}/>
            </div>
        </Router>,
        document.getElementById('content')
);
