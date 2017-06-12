import React, { Component, PropTypes, Element } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home.js';
import Tours from './Tours.js';
import KidYuki from './about/KidYuki.js';
import Amaya from './about/Amaya.js';
import David from './about/David.js';
import Kyle from './about/Kyle.js';
import Andre from './about/Andre.js';
import Deja from './about/Deja.js';
import Header from './Header.js';
import HomepageHeader from './HomepageHeader.js';
import NavMenu from './NavMenu.js';
import Footer from './Footer.js';

class Site extends Component {
    render(): Element {
        return (
            <div>
                <NavMenu/>
                {this.props.location.pathname === '/' ? <HomepageHeader/> : <Header/>}
                <div className="container">
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/tours" component={Tours}/>
                    <Route path="/about/kid_yuki" component={KidYuki}/>
                    <Route path="/about/amaya" component={Amaya}/>
                    <Route path="/about/david" component={David}/>
                    <Route path="/about/kyle" component={Kyle}/>
                    <Route path="/about/andre" component={Andre}/>
                    <Route path="/about/deja" component={Deja}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

Site.propTypes = {
    location: PropTypes.object.isRequired
};

export default withRouter(Site);
