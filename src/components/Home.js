import React, { Component, Element } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
    }

    _onHamburgerClick() {
        this.setState({toggled: !this.state.toggled});
    }

    render(): Element {
        return (
                <div>
                    <div className={`hamburger-container${this.state.toggled ? ' toggled' : ''}`} onClick={this._onHamburgerClick.bind(this)}>
                        <div className="bar1"/>
                        <div className="bar2"/>
                        <div className="bar3"/>
                    </div>
                    <div className={`menu-container${this.state.toggled ? '' : ' hidden'}`}>
                        <ul className="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="https://docs.google.com/spreadsheets/d/1AL56TrMR43UKL50SHjPk02B-OHVGnGDZ18_24XNSymo/htmlview#gid=0">Request List</a></li>
                            <li><a href="/tours">Tours</a></li>
                            <li>About
                                <ul className="submenu">
                                    <li><a href="/about/KidYuki">Kid Yuki</a></li>
                                    <li><a href="/about/Amaya">Amaya</a></li>
                                    <li><a href="/about/David">David</a></li>
                                    <li><a href="/about/Kyle">Kyle</a></li>
                                    <li><a href="/about/Andre">Andre</a></li>
                                    <li><a href="/about/Deja">{'Dej\'a'}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className="banner-image" src="./homepage_banner.jpg"/>
                    </div>
                    <div className="pinned-item">
                        <div>Next Kid Yuki show:</div>
                        <div><a href="#">Colossal Con, June 1 - 4 Sandusky, OH</a></div>
                    </div>
                    <div className="pinned-item">
                        <div>Next Kid Yuki livestream:</div>
                        <div><a href="#">Tuesday, April 17 at 9pm CST</a></div>
                    </div>
                    <div className="fb-page-container">
                        <div
                            className="fb-page"
                            data-adapt-container-width="true"
                            data-href="https://www.facebook.com/kidyuki1/"
                            data-hide-cover="true"
                            data-hide-cta="true"
                            data-show-facepile="false"
                            data-small-header="true"
                            data-tabs="timeline"
                        >
                            <blockquote 
                                cite="https://www.facebook.com/kidyuki1/" 
                                className="fb-xfbml-parse-ignore"
                            >
                                <a href="https://www.facebook.com/kidyuki1/">
                                    Kid Yuki and The Otakus
                                </a>
                            </blockquote>
                        </div>
                    </div>
                    <div className="footer">Kid Yuki &copy; 2017</div>
                </div>
        );
    }
}

export default Home;
