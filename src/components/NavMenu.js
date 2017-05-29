import React, { Component, Element } from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
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
                            <li><Link to="/">Home</Link></li>
                            <li><a href="https://docs.google.com/spreadsheets/d/1AL56TrMR43UKL50SHjPk02B-OHVGnGDZ18_24XNSymo/htmlview#gid=0">Request List</a></li>
                            <li><Link to="/tours">Tours</Link></li>
                            <li>About
                                <ul className="submenu">
                                    <li><Link to="/about/kid_yuki">Kid Yuki</Link></li>
                                    <li><Link to="/about/amaya">Amaya</Link></li>
                                    <li><Link to="/about/david">David</Link></li>
                                    <li><Link to="/about/kyle">Kyle</Link></li>
                                    <li><Link to="/about/andre">Andre</Link></li>
                                    <li><Link to="/about/deja">Dej'a</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default NavMenu;
