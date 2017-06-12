import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Site from './components/Site.js';

render(
        <Router>
            <Site/>
        </Router>,
        document.getElementById('content')
);
