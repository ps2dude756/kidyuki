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

    _renderLink(href, text): Element {
        return (
                <li onClick={this._onHamburgerClick.bind(this)}><Link to={href}>{text}</Link></li>
        );
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
                            {this._renderLink('/', 'Home')}
                            <li onClick={this._onHamburgerClick.bind(this)}><a href="https://docs.google.com/spreadsheets/d/1AL56TrMR43UKL50SHjPk02B-OHVGnGDZ18_24XNSymo/htmlview#gid=0">Request List</a></li>
                            {this._renderLink('/tours', 'Tours')}
                            <li>About
                                <ul className="submenu">
                                    {this._renderLink('/about/kid_yuki', 'Kid Yuki')}
                                    {this._renderLink('/about/amaya', 'Amaya')}
                                    {this._renderLink('/about/david', 'David')}
                                    {this._renderLink('/about/kyle', 'Kyle')}
                                    {this._renderLink('/about/andre', 'Andre')}
                                    {this._renderLink('/about/deja', 'Dej\'a')}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default NavMenu;
